import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase';

type Loan = {
  id: string;
  money: number;
  date: Date;
}

const useAllLoans = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const loansCollectionRef = collection(db, import.meta.env.VITE_FIREBASE_DATABASE_NAME);
        const querySnapshot = await getDocs(loansCollectionRef);
        const fetchedLoans = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          money: doc.data().money,
          date: doc.data().time.toDate(),
        }));
        setLoans(fetchedLoans);
        setLoading(false);
      } catch (error) {
        console.error('Error getting documents: ', error);
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  return { loans, loading };
};

export default useAllLoans;
