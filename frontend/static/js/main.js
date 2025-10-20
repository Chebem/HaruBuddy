import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDnk8nDU1mgypc9MOMnQVMolrDYmPCOUbM",
  authDomain: "harubuddy.firebaseapp.com",
  projectId: "harubuddy",
  storageBucket: "harubuddy.firebasestorage.app",
  messagingSenderId: "806634096813",
  appId: "1:806634096813:web:d1e1680344867579b79e24",
  measurementId: "G-Q7FDRH9MPZ"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// === Email sign-up ===
window.registerUser = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful!");
  } catch (e) {
    alert(e.message);
  }
};

// === Email login ===
window.loginUser = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in!");
  } catch (e) {
    alert(e.message);
  }
};

// === Google sign-in ===
document.getElementById("googleBtn").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    alert(`Welcome, ${result.user.displayName}!`);
  } catch (e) {
    alert(e.message);
  }
});

// === Logout ===
window.logoutUser = async function () {
  await signOut(auth);
  alert("Signed out!");
};

// === Listen for auth changes ===
onAuthStateChanged(auth, (user) => {
  console.log(user ? `✅ Logged in as ${user.email}` : "🚫 Logged out");
});