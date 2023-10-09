"use client";
import { useEffect, createContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

import { auth } from "../app/firebase";
import { create, del } from "@/app/actions";

const AuthContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setData(user);
    });
  }, []);
  // Sign in with email and password
  const handleSigninWithEmailAndPass = async ({ email, password }) => {
    if (!email && !password) {
      toast.warn("Please fill all the details correctly", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    if (!password) {
      toast.warn("Please fill the password section correctly", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    if (!email) {
      toast.warn("Please fill the email section correctly", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      auth.onAuthStateChanged(async (user) => {
        setData(user);
        if (user) {
          let token = await user.getIdToken(false);
          create(token);
        }
      });
      toast.success("Logged in Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Invalid credentials", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(error);
    }
  };

  // create user with email and password
  const createUser = async ({ email, password, cpassword, name }) => {
    if (cpassword !== password) {
      toast.warn("Please confirm password correctly", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    if (password.length <= 5) {
      toast.warn("Password length should be of atleast 6 letters", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    try {
      let user = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      auth.onAuthStateChanged(async (user) => {
        setData(user);
        if (user) {
          let token = await user.getIdToken(false);
          create(token);
        }
      });
      toast.success("SignedUp successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      await sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        alert("Email Verification Sent");
      });
    } catch (error) {
      toast.error("Email is already in use please use different id", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(error);
    }
  };

  // Sign in with google sign in providers
  const GoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      auth.onAuthStateChanged(async (user) => {
        setData(user);
        if (user) {
          let token = await user.getIdToken(false);
          create(token);
        }
      });
      toast.success("Logged in Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Sign out
  const handleSignout = async () => {
    try {
      await signOut(auth);
      setData(null);
      del();
      toast.warn("Logged out Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        GoogleSignIn,
        handleSigninWithEmailAndPass,
        createUser,
        handleSignout,
        auth,
        data,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
