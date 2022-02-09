import FormLogin from "../../components/FormLogin"
import { useHistory } from "react-router";

const Login = () => {

    const history = useHistory()

    const token = localStorage.getItem("@KAF_userToken");
    if (token) {
        history.push("/dashboard");
    }
    
    return(
        <div>
            <FormLogin />
        </div>
    )
}

export default Login