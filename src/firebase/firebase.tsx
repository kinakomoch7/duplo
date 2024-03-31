import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
// configを転記
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;