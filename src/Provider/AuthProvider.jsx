import { createContext, useEffect, useState } from "react";
import auth from "../Components/Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

 export const AuthContext =createContext()
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)

const createNewUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
    useEffect(()=>{
       const unsubcribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubcribe()
        }
    },[])

    // LogOut user 
   const logOut= ()=>{
return signOut(auth)

   }

//    login User 
const loginuser =(email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
}


//    Auth Data 
   const authData={
    user,setUser,
    createNewUser,
    logOut,loginuser
}
    return (
        <AuthContext.Provider value={authData}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;