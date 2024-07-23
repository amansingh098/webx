// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCVmCMJhDuWSVyK93fKuLOC6ij94YJDpHs",
    authDomain: "jobindeed-ae017.firebaseapp.com",
    projectId: "jobindeed-ae017",
    storageBucket: "jobindeed-ae017.appspot.com",
    messagingSenderId: "509827469591",
    appId: "1:509827469591:web:30ec7a8c507432f09a6752",
    measurementId: "G-BFGW0ZKH1K"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  export { auth, db, storage };

