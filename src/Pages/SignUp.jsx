import { Link , useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import { useState } from "react";


function SignUp() {
  const navigate=useNavigate();
  const [name , setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");


  const[error, setError]=useState("");
  const[success, setSuccess]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    setError("");
    setSuccess("");

    if(!name || !email || !password){
      setError("Please fill all the fields");
      return;
    };

    if(password.length<6){
      setError("Password must be at least 6 Characters");
      return;
    };


    const user={
      name:name,
      email:email,
      password:password,
    };

    localStorage.setItem("user",JSON.stringify(user));
      
    setName("");
    setEmail("");
    setPassword("");
    navigate("/login");
  }
  return (
    <div className="login-page">

      <div className="login-box">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}>
            </input>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>} {success && <p className="success">{success}</p>}

          <button type="submit">Signup</button>
        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </div>

    </div>
  );
}

export default SignUp;