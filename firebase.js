import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBxXOE9mCsexb8e6aLZII7-NFDbukx16VM",
  authDomain: "react-notes-506f8.firebaseapp.com",
  projectId: "react-notes-506f8",
  storageBucket: "react-notes-506f8.appspot.com",
  messagingSenderId: "515438654104",
  appId: "1:515438654104:web:9f0e80c7f0c05e03ca56ed"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

