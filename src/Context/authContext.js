"use client"
import { useContext,useEffect,createContext,useState } from "react";
import {signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth"
export const AuthContext=createContext()
import {auth} from "../app/firebase"
const AuthContextProvider = ({children}) => {
  const handleSigninWithEmailAndPass=async(email,password)=>{
    try {
      const provider=signInWithEmailAndPassword(auth,email,password).then((cred)=>console.log(cred  ))
      
    } catch (error) {
      console.log(error)
    }
  }
  const createUser=(email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
    // ..
  });
  }
  const GoogleSignIn=()=>{
    const provider=new GoogleAuthProvider();
    signInWithPopup(auth,provider).then((cred)=>console.log(cred)).catch(e=>console.log(e))
  }



  return (
    <AuthContext.Provider value={{user:"Akshay",GoogleSignIn,handleSigninWithEmailAndPass,createUser}}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider
