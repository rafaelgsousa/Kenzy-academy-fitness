import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
import { CadastroCss } from "../CadastroCss"
import logokenzie from "../../assets/img/logokenzie.png"
import { Button } from "../Button"

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
    const goTodash = () => {

        const token = localStorage.getItem("@KAF_userToken");

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
                    <div className="logo">
                        <img src={logokenzie} alt="logokenzie" />
                        <p>Kenzie Academy</p>
                    </div>

                    <div className="nav">
                        <div className="training">
                            <p>#Training <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Like a Dev</p>
                        </div>
                        <nav onClick={() => history.push("/")} className="signup">Home</nav>
                        <nav onClick={logout} className="signup">Logout</nav>
                        <nav onClick={() => history.push("/login")} className="login">Login</nav>
                    </div>
                    <div className="buttons">
                        <Button>Quem Somos</Button>
                        <Button>Planos</Button>
                        <Button onClick={goTodash}>Dashboard</Button>
                    </div>
                </header>
                <div className="container">
                    <div className="dados">
                        <h2>MATRÍCULA</h2>
                        <h5>DADOS PESSOAIS</h5>
                        <p>Agora é só preencher rapidinho alguns dados :)</p>
                        <h3 className="preenchimento">PREENCHIMENTO NÃO OBRIGATÓRIO</h3>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="Mvp">
                                <input placeholder="Username" {...register("username")} />
                                {errors.username?.message}
                                <input placeholder="E-mail" {...register("email")} />
                                {errors.email?.message}
                                <input placeholder="Password" {...register("password")} />
                                {errors.password?.message}
                            </div>
                            <div className="nonMvp1">

                                <input placeholder="Nome Completo" type="text" />
                                <input placeholder="Data de Nascimento" type="date" />
                                <input placeholder="Telefone" type="number" />
                                <div className="genero">
                                    <input type="radio" name="opcao" value="Masculino" /> Masculino
                                    <input type="radio" name="opcao" value="Feminino" /> Feminino
                                </div>
                            </div>
                            <div className="nonMvp2">
                                <input placeholder="Cep" type="number" />
                                <input placeholder="Endereço" />
                                <input placeholder="Bairro" type="text" />
                                <input placeholder="Cidade" type="text" />
                                <input placeholder="Número" type="number" />
                                <input placeholder="Complemento" />
                            </div>
                            <Button type="submit" className="Register">Cadastrar</Button>
                        </form>
                    </div>
                    <Button onClick={() => history.push("/login")} className="Login">Login</Button>

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
