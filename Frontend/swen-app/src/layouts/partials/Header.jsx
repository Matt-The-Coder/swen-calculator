import { useNavigate } from "react-router-dom"
import { logout, isAuth } from "../../components/auth/isAuth"

const Header = () =>{
    const nav = useNavigate(null)
    const loginUSer = isAuth()
    const homeClicked = () => {
        nav('/')
    }
    return(
       <div className="Header">
        <div className="logoImg">
        <img src="/assets/swen-logo.png" alt="SWEN logo" onClick={homeClicked} style={{cursor:'pointer'}}/>
        </div>
        <div className="loginEmail">
            <p>Logged in as {loginUSer?.email}</p></div>
        <div className="logoutBtn">
        <button onClick={logout}>Logout</button>
        </div>
      
       </div>
    )
}

export default Header