import {useSelector, useDispatch} from "react-redux";
import { logout } from "../feature/user";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return ( 
        <div>
            <h1> Profile Page </h1>
            <p> Name: {user.name} </p>
            <p> Age: {user.age} </p>
            <p> Email: {user.email} </p>
            <button onClick={() => {dispatch(logout(navigate("/")))}}>Logout</button>
        </div>
     );
}
 
export default Profile;