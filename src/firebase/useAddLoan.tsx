import { useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import db from './firebase';
import { addLoanType } from '../types/addLoanType';

export const addLoan = async (doc:addLoanType) => {
  try {
    const docRef = await addDoc(collection(db, import.meta.env.VITE_FIREBASE_DATABASE_NAME), doc);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
}

export const useAddLoans = (doc:addLoanType) => {

  useEffect(() => {
    addLoan(doc);
  }, [doc]);

};