import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase';
import { LoanType } from '../types/LoanType';

const useAllLoans = () => {
  const [loans, setLoans] = useState<LoanType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const loansCollectionRef = collection(db, import.meta.env.VITE_FIREBASE_DATABASE_NAME);
        const querySnapshot = await getDocs(loansCollectionRef);
        const fetchedLoans = querySnapshot.docs.map((doc) => (
          {
            id: doc.id,
            payUser: doc.data().payUser,
            money: doc.data().money,
            payTime: doc.data().payTime.toDate(),
            payType: doc.data().payType,
          }
        ));
        setLoans(fetchedLoans);
        setLoading(false);
      } catch (error) {
        console.error('Error getting documents: ', error);
        setLoading(false);
      }
    };

    fetchLoans();
  }, [loans]);

  return { loans, loading };
};

export default useAllLoans;
