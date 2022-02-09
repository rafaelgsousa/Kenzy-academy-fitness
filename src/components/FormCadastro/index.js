import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
import { CadastroCss } from "../CadastroCss"
import logokenzie from "../../assets/img/logokenzie.png"
import { Button } from "../Button"
import { Input } from './../Input'

const FormCadastro = () => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        username: yup.string().required("Username Required"),
        password: yup.string().required("Password Required"),
        email: yup.string().required("Email Required")
    })



    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(formSchema)
        })

    const onSubmit = (data) => {
        
        axios.post("https://kenzie-habits.herokuapp.com/users/", data)
            .then(() => {
                toast.success("Usuário registrado")
            })
            .catch((err) => toast.error("Usuário não registrado"))
    }
    const token = localStorage.getItem("@KAF_userToken");
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
            <CadastroCss>
                <header>
                    <div className="logo" onClick={()=>history.push("/")}>
                        <img src={logokenzie} alt="logokenzie" className="brand" />
                        <p>Kenzie Academy</p>
                    </div>

                    <div className="nav">
                        <div className="training">
                            <p>#Training <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Like a Dev</p>
                        </div>
                        <nav onClick={() => history.push("/")} className="signup">Home</nav>
                        {token && <nav onClick={logout} className="signup">Logout</nav>}
                        {!token && <nav onClick={() => history.push("/login")} className="login">Login</nav>}
                    </div>
                    <div className="buttons">
                        <Button onClick={() => history.push("/quemSomos")}>Quem Somos</Button>
                        {token && <Button onClick={goTodash}>Dashboard</Button>}
                    </div>
                </header>
                <div className="container">
                    <div className="content">
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <div className="mandatory-form">
                                <div className="dados">
                                    <h2>MATRÍCULA</h2>
                                    <h5>DADOS PESSOAIS</h5>
                                </div>
                                <div className="Mvp">
                                    <Input width={"100%"} placeholder="Username" {...register("username")} />
                                    {errors.username?.message}
                                    <Input width={"100%"} placeholder="E-mail" {...register("email")} />
                                    {errors.email?.message}
                                    <Input width={"100%"} type = {"password"} placeholder="Password" {...register("password")} />
                                    {errors.password?.message}
                                </div>
                                <Button type="submit" className="Register">Cadastrar</Button>
                            </div>
                            <div className="optional-form">
                                <h3 className="dados">PREENCHIMENTO NÃO OBRIGATÓRIO</h3>
                                <div className="nonMvp1">
                                    <Input width={"100%"} placeholder="Nome Completo" type="text" />
                                    <Input width={"100%"} placeholder="Data de Nascimento" type="date" />
                                    <Input width={"100%"} placeholder="Telefone" type="number" />
                                    <div className="genero">
                                        <div>
                                            <Input width={"20px"} type="radio" name="opcao" value="Masculino" />
                                            <label>Masculino</label>
                                        </div>
                                        <div>
                                            <Input width={"20px"} type="radio" name="opcao" value="Feminino" />
                                            <label>Feminino</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="nonMvp2">
                                    <Input width={"100%"} placeholder="Endereço" />
                                    <Input width={"100%"} placeholder="Bairro" type="text" />
                                    <Input width={"100%"} placeholder="Cidade" type="text" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <footer>
                    <div className="infoFooter">
                        <p>R. Gen. Mário Tourinho, 1733 <br /> Curitiba - PR, 80740-000</p>
                        <p>Segunda à Sexta <br /> 7:30 às 20:30</p>
                        <p>Contato <br /> (41)99745-3268</p>
                    </div>
                    <p className="copyright">© Copyright 2021. Todos os direitos reservados. Kenzie Estrutura Fitness.</p>
                </footer>
            </CadastroCss>
        </div>

    )
}

export default FormCadastro;
