const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set } = require("firebase/database");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseConfig = {
  apiKey: "AIzaSyAlDq8mw4rIOvmN621OGQOgrQokyAilW1k",
  authDomain: "comp4121-ecommerce.firebaseapp.com",
  databaseURL:
    "https://comp4121-ecommerce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comp4121-ecommerce",
  storageBucket: "comp4121-ecommerce.appspot.com",
  messagingSenderId: "708889910845",
  appId: "1:708889910845:web:dfccf9c90dc5a85254d454",
  measurementId: "G-YKDH3LDWBL",
};

const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const state = req.body;
  const email = state.email;
  const password = state.password;
  const username = state.username;
  const userid = state.userid;

  if (password.length < 8) {
    res.status(406).json({
      accepted: false,
      message: "Password must be at least 8 characters long!",
    });
    return;
  }
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Realtime Database and get a reference to the service
  const db = getDatabase(app);
  console.log("connected");
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      set(ref(db, "users/" + userid), {
        username: username,
        password: password,
      })
        .then(() => {
          // Data saved successfully!
          res.status(200).json({
            accepted: true,
            message: "Account created successfully!",
          });
        })
        .catch((error) => {
          // The write failed...
          console.log(error);
          res.status(500).json({
            accepted: false,
            message: "Account creation failed!",
          });
        });
    })
    .catch((error) => {
      //when email is already used by another account error, error is printed in console
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      res.status(406).json({
        accepted: false,
        message: "Email is already used by another account!",
      });
    });
});

module.exports = router;
