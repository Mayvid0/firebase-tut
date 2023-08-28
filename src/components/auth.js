import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("successful signing");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("successful signing");
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("Signed-Out");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-3 sm:gap-5">
      <input
        className="border p-2"
        type="email"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2"
        type="password"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="border-2 border-black bg-green-600 p-2"
        onClick={signIn}
      >
        Sign In
      </button>
      <button
        className="border-2 border-black bg-slate-200 p-2"
        onClick={signInWithGoogle}
      >
        Sign-in using Google
      </button>
      <button
        className="border-2 border-black bg-red-600 border-solid p-2"
        onClick={logout}
      >
        LogOut
      </button>
    </div>
  );
};
