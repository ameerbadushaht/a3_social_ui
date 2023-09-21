
import {Link} from 'react-router-dom'
// import { useState } from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router";
// import { useNavigate } from "react-router";
//  function Login ( {onLogin}) {
  const Login = (
    // { onLogin }
    ) => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    // const handleLogin = () => {
    //   // Simulating authentication
    //   if (username === "admin" && password === "password") {
    //     onLogin();
    //   } else {
    //     alert("Invalid username or password");
    //   }
    // };
   
    // function onRegister(){
    //   // eslint-disable-next-line react-hooks/rules-of-hooks
    //   const navigate = useNavigate()
    //   navigate('/register');
    // }

    return (
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">ASTATINE</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Astatine.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input
                placeholder="Username"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                className="loginInput"
              />
              <input
                placeholder="Password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="loginInput"
              />
              {/* <button onClick={handleLogin} className="loginButton">
                Log In
              </button> */}
              <span className="loginForgot">Forgot Password?</span>
             <Link to="/Register"><button className="loginRegisterButton" >
                
                Create a New Account
              </button></Link> 
            </div>
          </div>
        </div>
      </div>
    );
  };
  Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  
// }
export default Login;