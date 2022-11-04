import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.scss";
const Register = () => {
  const[inputs,setInputs]=useState({
    username:"",
    email:"",
    name:"",
    password:"",

  });
  const nav=useNavigate();
  const [errors,setErrors]=useState(null);
  const handleChange=(e)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
        try{
          await axios.post('http://localhost:8800/api/auth/register',inputs);
          nav("/login");
        }
        catch(error){
          setErrors(error.response.data);
          
        }
  }
  
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Be Medialy. </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            velit porro perspiciatis sequi.Aliquid dolores debitis at!
          </p>
          <span>You have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right ">
          <h1>Register</h1>
          <form action="">
            <input type="text" name="username" id="" placeholder="Username" onChange={handleChange}/>
            <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
            <input type="text" name="name" id="" placeholder="Name" onChange={handleChange}/>
            <input type="password" name="password" id="" placeholder="Password" onChange={handleChange}/>
            {errors&& <span style={{color:"red"}}>{errors}</span>}
            <button onClick={handleSubmit}>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
