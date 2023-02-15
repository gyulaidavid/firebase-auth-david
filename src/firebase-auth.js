import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDSk5m6rFZx07IFFns3_jQESNU8rtwaOUY",
  authDomain: "login-proba-48839.firebaseapp.com",
  projectId: "login-proba-48839",
  storageBucket: "login-proba-48839.appspot.com",
  messagingSenderId: "13108093089",
  appId: "1:13108093089:web:9b40f329b3e38c1b7850e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const login = function(email, password) {
    const auth = getAuth();
   return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
     return user
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        if(errorCode === 'auth/wrong-password'){
             console.log('nem jött össze, újra');
        }
      });

}

export const register = async function(email, password){
  const auth = getAuth();
  const user = await createUserWithEmailAndPassword(auth, email, password)
  return user
}