import { Link } from "react-router-dom";
import "./login.scss";
const Login = () => {
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
            <input type="text" name="" id="" placeholder="Username" />
            <input type="password" name="" id="" placeholder="Password" />

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
