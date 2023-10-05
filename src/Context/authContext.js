"use client"
import { useEffect,createContext,useState } from "react";
import {signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification
} from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export const AuthContext=createContext()

import {auth} from "../app/firebase"
import { create,del } from "@/app/actions";

const AuthContextProvider = ({children}) => {
  const [data,setData]=useState(null)

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{setData(user)})
    
  },[])
  // Sign in with email and password
  const handleSigninWithEmailAndPass=async({email,password})=>{
    try {
      let user=await signInWithEmailAndPassword(auth,email,password)
      auth.onAuthStateChanged( async user=>{
        setData(user)
        if(user){
          let token=await user.getIdToken(false)
          toast("Logged in Successfully")
          create(token)
        }
      }) 

    } catch (error) {
      console.log(error)
    }
  }
  
  // create user with email and password
  const createUser=async ({email,password,name})=>{
    try {
      let user= await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, {
        displayName: name,
      })
      auth.onAuthStateChanged(async user=>{
        setData(user)
        if(user){
          let token=await user.getIdToken(false)
          toast("Logged in Successfully")
          create(token)
        }
      })  
          
      await sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        alert("Email Verification Sent")
      });
      
    } catch (error) {
      console.log(error)
    }
  }
  
  // Sign in with google sign in providers
  const GoogleSignIn=async()=>{
    try {
      
      const provider=new GoogleAuthProvider();
      await signInWithPopup(auth,provider)
      auth.onAuthStateChanged(async user=>{
        setData(user)
        if(user){
          let token=await user.getIdToken(false)
          toast("Logged in Successfully")
          create(token)
        }
      })        
    } catch (error) {
      console.log(error)
    }
  }

  // Sign out 
  const handleSignout=()=>{
    signOut(auth).then(()=>{
      alert("Successfully logged out")
      setData(null)
      del()
    }).catch(error=>{console.log(error)})
  }

  return (
    <AuthContext.Provider value={{GoogleSignIn,handleSigninWithEmailAndPass,createUser,handleSignout,auth,data}}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider
