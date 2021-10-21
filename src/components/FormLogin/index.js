import { useHistory } from "react-router"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import jwt_decode from "jwt-decode"

const FormLogin = () => {

    const history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const SubmitLogin = (evt) => {
        evt.preventDefault()

        const Login = {
            username: username,
            password: password
        }

        axios.post("https://kenzie-habits.herokuapp.com/sessions/", Login)
            .then((response) => {
                toast.success("Login Success")

                const jwt = jwt_decode(response.data.access)

                localStorage.setItem("@KAF_userId", jwt.user_id)
                localStorage.setItem("@KAF_userToken", response.data.access)

                history.push("/dashboard")
            })
            .catch((err) => toast.error("Login Fail"))
    }



    return (
        <div>
            <form onSubmit={(evt) => SubmitLogin(evt)}>
                <input placeholder="Username" onChange={(evt) => setUsername(evt.target.value)} value={username} />
                <input placeholder="Password" type="password" onChange={(evt) => setPassword(evt.target.value)} value={password} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default FormLogin