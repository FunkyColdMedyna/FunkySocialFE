import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import "./login.scss"

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quaerat repellendus consequatur illum eveniet quibusdam voluptas libero autem et saepe laudantium a quod eligendi, officia, debitis quisquam molestias nisi eos.
          </p>
          <span> Don't have an account?</span>
          <Link to="/register">
            <button>register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login </h1> 
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to="/login">
              <button onClick={handleLogin}>Login</button>
            </Link> 
          </form>       
        </div>
      </div>

      </div>
  )
}

export default Login