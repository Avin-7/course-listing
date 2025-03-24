import conf from "../../conf/conf";
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: conf.firebaseApiKey,
  authDomain: conf.authDomain,
  projectId: conf.firebaseProjectId,
  storageBucket: conf.firebaseStorageBucket,
  messagingSenderId: conf.messagingSenderId,
  appId: conf.firebaseAppId
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const dataBase =getFirestore(firebaseApp);



