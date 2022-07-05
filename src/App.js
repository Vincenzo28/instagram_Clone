import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home"
import PersonalProfile from "./pages/PersonalProfile";
import {signUpCheck} from './store/actions/handleSignUp';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Logout from "./pages/Logout";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signUpCheck());
  }, []);
  return (
    <div style={{background:'#fafafa'}} className="App">
      <Routes>
        <Route exact path="/" element={<Auth />}/>
        <Route exact path="/SignUp" element={<SignUp />}/>
        <Route exact path="/Home" element={<Home />}/>
        <Route exact path="/PersonalProfile" element={<PersonalProfile />}/>
        <Route exact path="/logout" element={<Logout />}/>
      </Routes>
    </div>
  );
}

export default App;
