import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCazgHX7Km41Ty_KrcYjHDWiCZWKSAMXrE',
  authDomain: 'fast-food-303bb.firebaseapp.com',
  projectId: 'fast-food-303bb',
  storageBucket: 'fast-food-303bb.appspot.com',
  messagingSenderId: '235331676542',
  appId: '1:235331676542:web:470c49a91eb7abef7bab2f',
  measurementId: 'G-5FW7GJ0E10',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();

if (window.location.hostname === 'localhost') {
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectStorageEmulator(storage, 'localhost', 9199);
}

export { db, auth, storage };
