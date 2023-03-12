import "./Login.css";

const Login = () => {
    const loginToApp = () => (
        <div>Login</div>
    );

    const register = () => (
            <div>Login</div>
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
                <input type="text" placeholder="Email or Phone"/>
                <input type="password" placeholder="Password"/>
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
