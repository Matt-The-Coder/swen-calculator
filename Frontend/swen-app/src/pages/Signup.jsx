import Form from "../components/auth/Form.jsx"
import { auth } from "../firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from "react"
import { isAuth } from "../components/auth/isAuth"
import { useNavigate } from "react-router-dom"
const Signup = () =>{
    const [userCredential, setUserCredential] = useState({errorMessage: '', data: ''})
    const user = isAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(user !== null){
            navigate('/')
        }
    }, [user])
  
    const [email, setEmail] = useState({authType:"signUp", data:""})
    const [password, setPassword] = useState({authType:"signUp", data:""})
    const signUp = (e) => {
        e.preventDefault()
            createUserWithEmailAndPassword(auth, email.data, password.data)
            .then((credential)=>{
                setUserCredential({errorMessage:'', data: credential})
                alert('Account Successfully Created!')
                navigate('/login')
            }).catch(err => {
                const errorMessage = err.message || 'An error occurred.';
                setUserCredential({ errorMessage, data: '' });
              });
              
        }
       
      
   
   
    return(
        <div className="Signup">
         <Form auth={signUp} email={email} setEmail={setEmail} password={password}
          setPassword={setPassword} errorMessage={userCredential.errorMessage} />
        </div>
     )
    
   
       
   
}

export default Signup