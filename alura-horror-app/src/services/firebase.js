// src/services/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD49jCE7E_HQb4vWoEGKcWTpah4x4X7ziA",
  authDomain: "alurahorror.firebaseapp.com",
  projectId: "alurahorror",
  storageBucket: "alurahorror.appspot.com",
  messagingSenderId: "70104077888",
  appId: "1:70104077888:web:a0cd2e342baac2d9ad31a5",
  measurementId: "G-66QLT8ZFPH"
};

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore
const db = getFirestore(app);

export { db };
