import { useDispatch } from "react-redux";
import { login } from "../feature/user";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    return ( 
        <div>
            <form>
             <label>Name: </label>
             <input id="name"></input>
             <label>Age: </label>
             <input id="age"></input>
             <label>Email: </label>
             <input id="email"></input>

            
            <button onClick={() => {
                dispatch(login({name:document.getElementById("name").value, age:document.getElementById("age").value, email: document.getElementById("email").value}, navigate("/profile")))
            }}>Login</button>
            </form>
           
        </div>
     );
}
 
export default Login;