import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAb4pO8ZOHbdoP3UrFuWij_ZqwDGOA0mX4",
    authDomain: "frontend-aa4f5.firebaseapp.com",
    projectId: "frontend-aa4f5",
    storageBucket: "frontend-aa4f5.appspot.com",
    messagingSenderId: "154967231498",
    appId: "1:154967231498:web:cd7a12324d5ee0f109e3f3"
}
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);