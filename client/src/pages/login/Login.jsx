import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
const Login = () => {
  const { login } = useContext(AuthContext);
  const [errors,setErrors]=useState("")
  const [inputs,setInputs]=useState({
    username:"",
    password:""
  });
  const nav=useNavigate();
  const handleChange=(e)=>{
        setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
  }
const handleSubmit=async (e)=>{
  e.preventDefault();
  try{
    await login(inputs);
    nav('/');
  }catch(error){
    console.log(error.response.data);
  }
  
}
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Join Medialy. </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            velit porro perspiciatis sequi.Aliquid dolores debitis at!
          </p>
          <span>Don't you have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right ">
          <h1>Login</h1>
          <form action="">
            <input type="text" name="username" id="" placeholder="Username" onChange={handleChange}/>
            <input type="password" name="password" id="" placeholder="Password" onChange={handleChange}/>
            {errors&& <span style={{color:"red"}}>{errors}</span>}
            
            <button onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
