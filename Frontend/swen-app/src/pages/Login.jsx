import {useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Form from "../components/auth/Form.jsx"
import {auth} from '../firebase/firebase'
import { isAuth } from "../components/auth/isAuth"
import { signInWithEmailAndPassword } from "firebase/auth"
const Login = () =>{
    const [userCredentials, setUserCredentials] = useState({errorMessage: '', data: ''})
 
    const user = isAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(user !== null){
            navigate('/')
        }
    }, [user])
 
    const [email, setEmail] = useState({authType:"login", data:""})
    const [password, setPassword] = useState({authType:"login", data:""})
    const login = (e) =>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email.data, password.data)
        .then((userCredential)=>{
            setUserCredentials({errorMessage: '', data: userCredential})
            navigate('/')
        }).catch(err => setUserCredentials({errorMessage: err, data: ''}))
    }

    return(
       <div className="Login">
        <Form email={email} setEmail={setEmail} password={password} 
        setPassword={setPassword} auth={login} errorMessage={userCredentials.errorMessage}/>
       </div>
    )
       
}

export default Login