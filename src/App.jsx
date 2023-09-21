// import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import {Routes,Route} from "react-router-dom";
// import { useParams, Outlet, useLocation } from "react-router-dom";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };
  return (
    <div>
      {/* {isLoggedIn ?  */}
      {/* <Profile />  */}
      {/* : 
      <Login 

      onLogin={handleLogin} 
      />} */}
{/* <Login /> */}
      {/* <Home /> */}
<Routes>
<Route path="/Register" element={<Register />} />
<Route path="/Login" element={<Login />} />
  <Route path="/" element={<Home />} /> 
  
  <Route path="/Profile" element={<Profile />} />
  
  
</Routes>
      {/* <Register /> */}
    </div>
  );
}

export default App;
