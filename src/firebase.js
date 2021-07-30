import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5qjzxjab3vvUXP2xRJPUKDrcIITBPcCw",
  authDomain: "whatsapp-clone-b8d0a.firebaseapp.com",
  projectId: "whatsapp-clone-b8d0a",
  storageBucket: "whatsapp-clone-b8d0a.appspot.com",
  messagingSenderId: "267793297144",
  appId: "1:267793297144:web:67b47996d9ade3b235d50d",
  measurementId: "G-NJHCXNZ1DX"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
