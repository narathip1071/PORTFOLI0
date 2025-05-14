import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// ตั้งค่า Firebase
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
const db = getDatabase(app);

// ลงทะเบียน
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  if (password !== confirmPassword) {
    message.textContent = "รหัสผ่านไม่ตรงกัน";
    message.style.color = "red";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // บันทึกชื่อผู้ใช้ใน Realtime Database
      set(ref(db, "users/" + user.uid), {
        username: username,
        email: email
      });

      // ไปหน้า login
      window.location.href = "/html/login.html";
    })
    .catch((error) => {
      message.textContent = error.message;
      message.style.color = "red";
    });
});
