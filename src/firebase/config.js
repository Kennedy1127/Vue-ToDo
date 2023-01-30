import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBNKTe5zE1vodOTYDSzAd2gp312DgoiG7M',
  authDomain: 'note-todo-64d69.firebaseapp.com',
  projectId: 'note-todo-64d69',
  storageBucket: 'note-todo-64d69.appspot.com',
  messagingSenderId: '509734513072',
  appId: '1:509734513072:web:fee9eec816fdbbb7094e75',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
