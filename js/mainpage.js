import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

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

// เริ่มต้น Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ตรวจสอบการล็อกอิน
onAuthStateChanged(auth, (user) => {
  const profilePic = document.getElementById("profile-pic");
  const userProfileLink = document.getElementById("user-profile").querySelector("a");

  if (user) {
    profilePic.src = user.photoURL || "/images/default-user.png";
    userProfileLink.href = "/html/profile.html";
  } else {
    window.location.href = "/html/login.html";
  }
});

import { auth } from './js/firebase-config.js';
import { onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = 'main.html';
  }
});

