import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_API_KEY,
  authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_APP_PROJECT_ID,
  storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_APP_ID,
};

// Firebaseの初期化
export const app = initializeApp(firebaseConfig);

// Firestoreの初期化
export const db = getFirestore(app);

/* 
①firestoreのDBを使う場合は、以下のようにimportする
----------------------------------------------
import { db } from "../../firebase";
 */

/* 
①Authenticationを使う場合は、以下のようにimportする
②firebase.tsからauthをexportする
----------------------------------------------
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

// Authの取得
const auth = getAuth(app);
*/
