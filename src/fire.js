import firebase from "firebase";
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBWe1AaICq3FWKLb-GTDqixqe3KMq9hKm0",
    authDomain: "internshub-3eab5.firebaseapp.com",
    projectId: "internshub-3eab5",
    storageBucket: "internshub-3eab5.appspot.com",
    messagingSenderId: "509683084197",
    appId: "1:509683084197:web:f164393632012132d8164c"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
