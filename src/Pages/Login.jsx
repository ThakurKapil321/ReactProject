import { Link, useNavigate} from "react-router-dom";
import "../CSS/Login.css";
import Header from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { useState } from "react";

function Login() {
  const navigate=useNavigate();

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const[error,setError]=useState("");
  const[success,setSuccess]=useState("");

  const handleSubmit=(e)=>{
   e.preventDefault();
   setError("");
   setSuccess("");

   if(!email || !password){
    setError("Please enter email and password");
    return;
   }
    const getUser=localStorage.getItem("user");
     
    if(!getUser){
      setError("No account is found. Please sign up ");
      return;
    }
    const user=JSON.parse(getUser);

    if(email==user.email && password==user.password){
      localStorage.setItem("isLogged",true);
      navigate("/")
    }
    else{
      setError("Invalid email and password");
    }
  }
  return (
    <>
    <Header/>
    <div>
    <div className="login-page">
     
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email} onChange={(e)=>setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
          />
           {error && ( <p className="error"> {error} </p> )}
          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?
          <Link to="/SignUp">Sign Up</Link>
        </p>
      </div>

    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;