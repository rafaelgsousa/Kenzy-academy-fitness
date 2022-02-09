import { useHistory } from "react-router"
import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';
import jwt_decode from "jwt-decode"
import { Button } from "../Button"
import logokenzie from "../../assets/img/logokenzie.png"
import { LoginCss } from "../LoginCss"
import { Input } from '../Input'
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";


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

        localStorage.setItem("@KAF_userId", JSON.stringify(jwt.user_id))
        localStorage.setItem("@KAF_userToken", JSON.stringify(response.data.access))

        history.push("/dashboard")
      })
      .catch((err) => toast.error("Login Fail"))
  }
  const token = JSON.parse(localStorage.getItem("@KAF_userToken"));

  const goTodash = () => {


    if (token) {

      history.push("/dashboard");

    } else {
      toast.error("Faça login para acessar")
    }
  }
  const logout = () => {
    localStorage.clear()
    history.push("/")
    toast.success("Logout feito com sucesso")
  }

  return (
    <div>
      <LoginCss>
        <header>
          <div className="logo" onClick={()=>history.push("/")}>
            <img src={logokenzie} alt="logokenzie" />
            <p>Kenzie Academy</p>
          </div>

          <div className="nav">
            <div className="training">
              <p>#Training <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Like a Dev</p>
            </div>
            <nav onClick={logout} className="signup">Logout</nav>
            <nav onClick={() => history.push("/")} className="signup">Home</nav>
            <nav onClick={() => history.push("/signUp")} className="signup">Sign Up</nav>
          </div>
          <div className="buttons">
            <Button onClick={() => history.push("/quemSomos")}>Quem Somos</Button>
            {token && <Button onClick={goTodash}>Dashboard</Button>}
          </div>
        </header>
        <div className="container">
          <form onSubmit={(evt) => SubmitLogin(evt)} className="form">
            <h1 className="h1login">LOGIN</h1>
            <Input width={"250px"} placeholder="Username" onChange={(evt) => setUsername(evt.target.value)} value={username} />
            <Input width={"250px"} placeholder="Password" type="password" onChange={(evt) => setPassword(evt.target.value)} value={password} />
            <Button type="submit" className="Login">Login</Button>
          </form>
        </div>
        <footer>
          <div className="infoFooter">
            <p>R. Gen. Mário Tourinho, 1733 <br /> Curitiba - PR, 80740-000</p>
            <p>Segunda à Sexta <br /> 7:30 às 20:30</p>
            <p>Contato <br /> (41)99745-3268</p>
          </div>
          <p className="copyright">© Copyright 2021. Todos os direitos reservados. Kenzie Estrutura Fitness.</p>
        </footer>
      </LoginCss>
    </div>
  )
}

export default FormLogin
