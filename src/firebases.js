import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWNRbww4J4eMfOkokPS9zL4fY3mf-jNP0",
    authDomain: "kupang-e0df5.firebaseapp.com",
    projectId: "kupang-e0df5",
    storageBucket: "kupang-e0df5.appspot.com",
    messagingSenderId: "684448953668",
    appId: "1:684448953668:web:1a1e08cfd45dbc77ea5311",
    measurementId: "G-62TV8607HP"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };