import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAi2ndQXiEMHKPx3B0ocLkKCyypB2xXbvE",
  authDomain: "booksanta2-d17f3.firebaseapp.com",
  projectId: "booksanta2-d17f3",
  storageBucket: "booksanta2-d17f3.appspot.com",
  messagingSenderId: "722761323422",
  appId: "1:722761323422:web:10514ed3297aa49b60fc8f"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
