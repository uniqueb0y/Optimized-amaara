// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
//import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR47Vf6RgU4by9Oq26QYGksLHekh0Isb0",
  authDomain: "dd-amaara-seetu.firebaseapp.com",
  projectId: "dd-amaara-seetu",
  storageBucket: "dd-amaara-seetu.appspot.com",
  messagingSenderId: "414690344029",
  appId: "1:414690344029:web:5e5b13b754765142e521b4",
  measurementId: "G-HEQX4ZLTM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const messaging = getMessaging();
export const storage = getStorage();
const analytics = getAnalytics(app);

// export const requestForToken = () => {
//   return getToken(messaging, { vapidKey: '' })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log('current token for client: ', currentToken);
//         // Perform any other neccessary action with the token
//       } else {
//         // Show permission request UI
//         console.log('No registration token available. Request permission to generate one.');
//       }
//     })
//     .catch((err) => {
//       console.log('An error occurred while retrieving token. ', err);
//     });
// };

export { app, auth, analytics };