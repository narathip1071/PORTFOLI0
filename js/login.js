import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDB_spejO_6GbxEp03zDq0SeqQNHiyOC8k",
  authDomain: "test1-f0be1.firebaseapp.com",
  databaseURL: "https://test1-f0be1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test1-f0be1",
  storageBucket: "test1-f0be1.appspot.com",
  messagingSenderId: "515854021909",
  appId: "1:515854021909:web:27a9b67940121bc84c251c",
  measurementId: "G-M5JNNZ31DW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login with email/username and password
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const identifier = document.getElementById("identifier").value;  // Email or Username
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Check if the identifier is an email or username
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let loginIdentifier = emailRegex.test(identifier) ? identifier : `${identifier}@example.com`;  // Default domain for username

  signInWithEmailAndPassword(auth, loginIdentifier, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setTimeout(() => {
        // ไปที่หน้า mainpage.html หลังจากล็อกอินสำเร็จ
        window.location.href = "mainpage.html";
      }, 100);
    })
    .catch((error) => {
      message.style.color = "red";
    });
});

// Google login
document.getElementById("googleLogin").addEventListener("click", function() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // ไปที่หน้า mainpage.html หลังจากล็อกอินสำเร็จ
      window.location.href = "mainpage.html";
    })
    .catch((error) => {
      console.error("Error during Google login:", error.message);
    });
});

// Facebook login
document.getElementById("facebookLogin").addEventListener("click", function() {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log( user);
      // ไปที่หน้า mainpage.html หลังจากล็อกอินสำเร็จ
      window.location.href = "mainpage.html";
    })
    .catch((error) => {
      console.error("Error during Facebook login:", error.message);
    });
});
