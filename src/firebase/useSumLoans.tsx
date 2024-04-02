import { useEffect, useState } from 'react';
import { collection, getAggregateFromServer, sum } from 'firebase/firestore';
import db from './firebase';


const useSumLoans = () => {
  const [sumLoans, setSumLoans] = useState<number>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const loansCollectionRef = collection(db, import.meta.env.VITE_FIREBASE_DATABASE_NAME);
        const queryCollectionRef = loansCollectionRef;
        const querySnapshot = await getAggregateFromServer(queryCollectionRef, {money : sum("money")});
        const fetchedLoans = querySnapshot.data().money;
        setSumLoans(fetchedLoans);
        setLoading(false);
      } catch (error) {
        console.error('Error getting documents: ', error);
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  return { sumLoans, loading };
};

export default useSumLoans;
