import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FAREBASE_APP_API_KEY,
  authDomain: process.env.FAREBASE_APP_AUTH_DOMAIN,
  projectId: process.env.FAREBASE_APP_PROJECT_ID,
  storageBucket: process.env.FAREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.FAREBASE_APP_MESSAGING_SENDER_ID,
  appId: process.env.FAREBASE_APP_APP_ID,
};

// Firebaseの初期化
export const app = initializeApp(firebaseConfig);

// Firestoreの初期化
export const db = getFirestore(app);

/* 
firestoreのDBを使う場合は、以下のようにimportする
import { db } from "../../firebase";
 */

/* 
Authenticationを使う場合は、以下のようにimportする
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
*/
