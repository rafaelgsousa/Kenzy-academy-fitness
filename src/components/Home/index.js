import { useHistory } from "react-router"
import { HomeCss } from "../HomeCss"
import { Button } from "../Button"
import logokenzie from "../../assets/img/logokenzie.png"
import home1 from "../../assets/img/home1.jpeg"
import home2 from "../../assets/img/home2.jpeg"
import home3 from "../../assets/img/home3.jpeg"
import home4 from "../../assets/img/home4.jpeg"
import { toast } from 'react-toastify';


const Home = () => {

    const history = useHistory()
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
            <HomeCss>
                <header>
                    <div className="logo">
                        <img src={logokenzie} alt="logokenzie" />
                        <p>Kenzie Academy</p>
                    </div>

                    <div className="nav">
                        <div className="training">
                            <p>#Training <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Like a Dev</p>
                        </div>
                        {token && <nav onClick={logout} className="signup">Logout</nav>}
                        {!token && <nav onClick={() => history.push("/login")} className="login">Login</nav>}
                        {!token && <nav onClick={() => history.push("/signUp")} className="signup">Sign Up</nav>}
                    </div>
                    <div className="buttons">
                        <Button onClick={() => history.push("quemSomos")}>Quem Somos</Button>
                        {token && <Button onClick={goTodash}>Dashboard</Button>}
                    </div>
                </header>
                <div className="container">
                    <div className="images">
                        <span>
                            <img src={home1} alt="home1" width={"240px"} height={"220px"} />
                        </span>
                        <span>
                            <img src={home2} alt="home2" width={"240px"} height={"220px"} />
                        </span>
                        <span>
                            <img src={home3} alt="home3" width={"240px"} height={"220px"} />
                        </span>
                        <span>
                            <img src={home4} alt="home4" width={"240px"} height={"220px"} />
                        </span>
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
            </HomeCss>


        </div>
    )
}

export default Home