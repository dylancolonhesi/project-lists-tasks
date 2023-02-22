import { initializeApp } from 'firebase/app'
import { getFiresotre } from 'firebase/firestore'
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA7UzEvPr4U4ldBSWg8-qi8U65EEFbPRJU",
    authDomain: "canvas-epigram-325315.firebaseapp.com",
    projectId: "canvas-epigram-325315",
    storageBucket: "canvas-epigram-325315.appspot.com",
    messagingSenderId: "604372741036",
    appId: "1:604372741036:web:d66f68266659bd3a592809",
    measurementId: "G-32DKHHF9FP"
  };



const firebaseApp = initializeApp(firebaseConfig);

const db = getFiresotre(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };