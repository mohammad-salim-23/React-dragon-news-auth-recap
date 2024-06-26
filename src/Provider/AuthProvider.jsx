import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import { useState,useEffect } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(email,password);
    }
    const logOut = ()=>{
        setLoading(true);
        signOut(auth);
    }
    
    useEffect( ()=>{
const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    console.log("user in the auth state changed",currentUser);
    setLoading(false);
    setUser(currentUser);
})
    return ()=>{
        unSubscribe();
    }
    } ,[])
    const authInfo = { 
        user,
        createUser,
        signInUser,
      logOut,
      loading
    }

    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
