import { useState } from "react";
import "./Login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/userSlice";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [user, setUser] = useState(null);
    const dispatch = useDispatch();



    const loginToApp = (e) => {
        e.preventDefault();
        
    };

    const register = () => (
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                dispatch(login({
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    displayName: email,
                    // display name and profile picture 
                }))
            })
        .catch((error) => {
            console.error(error);
            alert(error);
        })
    );
    
    

  return (
    <div className="login">
      <img src="icons/LI-Logo.png" alt=""/>

      <div className="login-box">
        <div className="login-container">
            <div className="login-signin">
                <h1>Sign in</h1>
                <p>Stay updated on your professional world</p>
            </div>
            <form>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email or Phone" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <h4>Forgot password?</h4>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
        </div>
      </div>
      <p className="login-new">New to LinkedIn? 
        <span className="login-register" onClick={register}>Join Now</span>
      </p>
    </div>
  );
};

export default Login;
