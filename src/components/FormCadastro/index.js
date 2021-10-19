import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios";
import { toast } from "react-toastify"

const FormCadastro = () => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        username: yup.string().required("Username Required"),
        password: yup.string().required("Password Required"),
        email: yup.string().required("Email Required"),
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
                toast.success("Registered User")
            })
            .catch((err) => toast.error("Unregistered User"))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Username" {...register("username")} />
                {errors.username?.message}
                <input placeholder="E-mail" {...register("email")} />
                {errors.email?.message}
                <input placeholder="Password" {...register("password")} />
                {errors.password?.message}

                <input placeholder="Nome Completo" type="text" />
                <input placeholder="Data de Nascimento" type="date" />
                <input placeholder="Telefone" type="number" />
                <input placeholder="Cep" type="number" />
                <input placeholder="Endereço" />
                <input placeholder="Bairro" type="text" />
                <input placeholder="Cidade" type="text" />
                <input placeholder="Número" type="number" />
                <input placeholder="Complemento" />
                <input type="radio" name="opcao" value="Masculino" /> Masculino
                <input type="radio" name="opcao" value="Feminino" /> Feminino
                <button type="submit">Cadastrar</button>
            </form>
            <button onClick={() => history.push("/login")}>Login</button>
        </div>

    )
}

export default FormCadastro;