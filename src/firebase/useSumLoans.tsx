import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from './firebase';


const useSumLoans = () => {
  const [sumLoansPositive, setSumLoansPositive] = useState<number>();
  const [sumLoansNegative, setSumLoansNegative] = useState<number>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const loansCollectionRef = collection(db, import.meta.env.VITE_FIREBASE_DATABASE_NAME);
        const queryCollectionPositive = query(loansCollectionRef, where("money", ">=", 0));
        const queryCollectionNegativeNumber = query(loansCollectionRef, where("money", "<", 0));

        const [querySnapshotPositive, querySnapshotNegative] = await Promise.all([
          getDocs(queryCollectionPositive),
          getDocs(queryCollectionNegativeNumber)
        ]);

        const fetchedLoans = querySnapshotPositive.docs.reduce((acc:number, doc) => acc + doc.data().money, 0);
        const fetchedLoansNegative = querySnapshotNegative.docs.reduce((acc:number, doc) => acc + doc.data().money, 0);

        setSumLoansPositive(fetchedLoans);
        setSumLoansNegative(fetchedLoansNegative);
        setLoading(false);
      } catch (error) {
        console.error('Error getting documents: ', error);
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  return { sumLoansPositive, sumLoansNegative , loading };
};

export default useSumLoans;
