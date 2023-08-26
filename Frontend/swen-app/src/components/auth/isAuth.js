import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { useEffect, useState } from 'react'

export const logout = () =>{
    signOut(auth).then(()=>{
        window.location= "/login"
    }).catch(err => {console.log("error " + err)})
}
export const isAuth = () => {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
            }
        })
       return () => {
        listen()
       }
       
    }, [])
    return user
}