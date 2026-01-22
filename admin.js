// 🔥 CONFIG FIREBASE
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

// 🔐 LOGIN ADMIN
const loginForm = document.getElementById("loginForm");
const adminArea = document.getElementById("adminArea");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("adminEmail").value;
    const password = document.getElementById("adminPassword").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        loginForm.style.display = "none";
        adminArea.style.display = "block";
      })
      .catch(err => {
        alert("Login inválido");
        console.error(err);
      });
  });
}

// 🔒 PROTEÇÃO AUTOMÁTICA
auth.onAuthStateChanged(user => {
  if (user) {
    if (loginForm) loginForm.style.display = "none";
    if (adminArea) adminArea.style.display = "block";
  } else {
    if (loginForm) loginForm.style.display = "block";
    if (adminArea) adminArea.style.display = "none";
  }
});
// 📦 REFERÊNCIA DA COLEÇÃO
const produtosRef = db.collection("produtos");

// ➕ ADICIONAR PRODUTO (versão inicial)
function addProduct() {
  const name = document.getElementById("name").value.trim();
  const price = document.getElementById("price").value.trim();
  const link = document.getElementById("link").value.trim();

  if (!name || !price || !link) {
    alert("Preencha nome, preço e link.");
    return;
  }

  produtosRef.add({
    name,
    price,
    link,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("link").value = "";
    loadProducts();
  });
}

