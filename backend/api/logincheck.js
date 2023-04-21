const express = require("express");
const router = express.Router();

const { initializeApp } = require("firebase/app");
const { getDatabase, ref, child, get } = require("firebase/database");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
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

router.get("/", async (req, res) => {
  const state = req.query;
  const email = state.email;
  const password = state.password;
  const userid = state.userid;

  //Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Realtime Database and get a reference to the service
  const dbRef = ref(getDatabase(app));
  console.log("connected to db");

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      get(child(dbRef, "users/" + userid))
        .then((snapshot) => {
          if (snapshot.exists() && snapshot.val().password === password) {
            console.log("LOGIN SUCCESSFUL");
            res.status(200).json({
              message: "Login successful!",
              username: snapshot.val().username,
            });
          } else {
            console.log("No data available");
            res.status(401).json({ message: "Login failed!" });
          }
        })
        .catch((error) => {
          console.error(error);
          res.status(401).json({ message: "Login failed!" });
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(401).json({ message: "Login failed!" });
    });
});

module.exports = router;
