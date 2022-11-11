import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {auth} from '../Firebase/Firebase'
import {
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut
} from 'firebase/auth'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const googleSignIn = () =>{
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider)
    }
    const logOut = () =>{
        signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    },[])
  return (
    <AuthContext.Provider value={{googleSignIn,user,logOut}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider