import { useRef, useEffect } from "react";
import { Link } from "react-router-dom"

const Form = ({ email, password, setEmail, setPassword, auth, errorMessage }) => {
    let loginError = useRef(null)
    let signUpError = useRef(null)
 useEffect(()=>{
  const handleError = () => {
      if(loginError.current){
        loginError.current.style.display = "block"
      }
      if(signUpError.current){
        signUpError.current.style.display = "block"
      }
    let authTimeout;
      authTimeout = setTimeout(() => {
        if (loginError.current) {
          loginError.current.style.display = "none";
        }
        if (signUpError.current){
          signUpError.current.style.display = "none"
        }
      }, 3000);

  }
  handleError()
 }, [errorMessage])
  
    return (
      <div className="form-Container">
        <div className="logo-Container">
          <img src="./src/assets/images/swen-logo.png" alt="Swen-Logo" />
          <p>SWEN Caloocan</p>
        </div>
     {errorMessage !== ''?
     email.authType=="login"?
     <p id="Warning" ref={loginError}>Email or Password is Wrong!</p>:<p id="Warning" ref={signUpError}> Email is Already Registered!</p>:
     null
    }
        <form onSubmit={(e) => { auth(e) }}>
          <label htmlFor="userName">Username</label>
          <input
            type="email"
            name="userName"
            id="userName"
            placeholder="Enter E-mail"
            autoComplete="current-username"
            required
            value={email.data}
            onChange={(e) => {
                setEmail({authType:email.authType == "signUp" ? "signUp":"login", data:e.target.value})
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter Password"
            size='6'
            maxLength="10"
            autoComplete="current-password"
            value={password.data}
            onChange={(e) => {
              setPassword({authType:email.authType == "signUp"?"signUp":"login", data:e.target.value});
            }}
          />
            {email.authType == "login"? (<button type="submit">Login</button>) : <button type="submit">SignUp</button>
        }
        </form>
        {email.authType == "login"? (<Link to={'/signup'}>Create new account?</Link>) : (<Link to={'/login'}>Already have account?</Link>)
        }
        
      </div>
    );
  };
  
  export default Form