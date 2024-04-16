import { deleteDoc, doc } from "firebase/firestore";
import db from "./firebase";


export const deleteLoan = async(docId:string) => {

  try {
    await deleteDoc(doc(db, import.meta.env.VITE_FIREBASE_DATABASE_NAME, docId));
    console.log('Document successfully deleted!')
  } catch (error) { 
    console.error('Error getting documents: ', error);
  }

  return (
    <div>deleteLoan</div>
  )

}

export const useDeleteLoan = () => {
  return (
    <div>useDeleteLoan</div>
  )
}
