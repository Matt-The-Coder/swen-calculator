import { Outlet } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { isAuth } from "../components/auth/isAuth";
import { useEffect, useState } from "react";

const Homelayout = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const user = isAuth();

  useEffect(() => {
    setTimeout(() => {
      setAuthChecked(true);
    }, 1000);
  }, [user]);

  if (!authChecked) {
    return null;
  }

   if (user == null) {
     window.location = './login'
    }


 
  





  return (
    <div className="homeLayout">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Homelayout;
