import firebase from 'firebase/app';
import 'firebase/auth';  // if using Firebase authentication
import 'firebase/firestore';  // if using Cloud Firestore
const firebaseConfig = {
  apiKey: "AIzaSyC6xjzHLwsoI757ljt146zFaX9JUJ0aJOM",
  authDomain: "steady-method-304514.firebaseapp.com",
  projectId: "steady-method-304514",
  storageBucket: "steady-method-304514.appspot.com",
  messagingSenderId: "535304085875",
  appId: "1:535304085875:web:21a60bc7660a555ac0e506",
  measurementId: "G-L31YNLRB82"
};
firebase.initializeApp(firebaseConfig);
export async function loginUser(username:string,password:string) {
 const email='${username}@gmail.com'
 const pass='${password}'
  const res= await firebase.auth().signInWithEmailAndPassword(email, pass)
}

export default firebase;
 