const firebaseConfig = {
  apiKey: "AIzaSyAHp464UWgKAn7F3bPNz_aq7y3ebRn-A6c",
  authDomain: "formjs-93a8a.firebaseapp.com",
  projectId: "formjs-93a8a",
  storageBucket: "formjs-93a8a.appspot.com",
  messagingSenderId: "181873521825",
  appId: "1:181873521825:web:8691c3030bc2f808826ce0"
};
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();