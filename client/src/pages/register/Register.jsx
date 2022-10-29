import { Link } from "react-router-dom";
import "./register.scss";
const Register = () => {
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
            <input type="text" name="" id="" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Name" />
            <input type="password" name="" id="" placeholder="Password" />
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
