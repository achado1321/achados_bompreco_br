// 🔥 CONFIG FIREBASE (cole o seu aqui)
const firebaseConfig = {
  apiKey: "AIzaSyB2hYymrzOG__95wxyrG3soEjinVD9ONvM",
  authDomain: "achadosebompre.firebaseapp.com",
  projectId: "achadosebompre",
  storageBucket: "achadosebompre.firebasestorage.app",
  messagingSenderId: "885306134293",
  appId: "1:885306134293:web:a167546fe9c8a7662e231c"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

