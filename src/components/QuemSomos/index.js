import { QuemSomosCss } from "../QuemSomosCss";
import { Button } from "../Button"
import logokenzie from "../../assets/img/logokenzie.png"
import { useHistory } from "react-router";
import { toast } from 'react-toastify';

const QuemSomos = () => {

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

    return(
        <div>
            <QuemSomosCss>
            <header>
          <div className="logo">
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
          <Button onClick={() => history.push("quemSomos")}>Quem Somos</Button>
              {token && <Button onClick={goTodash}>Dashboard</Button>}
          </div>
        </header>
        <div className="container">
            <div className="QuemSomos">
            <ul>
                <li>Ian Kuntz </li>
                <li><a href="github.com/iandrokuntz">Github</a></li>
                <li><a href="linkedin.com/in/rafael-sousa-61b654112">Linkedin</a></li>
            </ul>
            <ul>
                <li>Rafael Souza</li>
                <li><a href="github.com/rafaelgsousa">Github</a></li>
                <li><a href="linkedin.com/in/rafael-sousa-61b654112">Linkedin</a></li>
            </ul>
            <ul>
                <li>Felipe Silveira</li>
                <li><a href="github.com/felipelarson">Github</a></li>
                <li><a href="linkedin.com/in/felipe-larson-da-silveira">Linkedin</a></li>
                
            </ul>
            <ul>
                <li>Kaueh A Prats</li>
                <li><a href="github.com/Kurein">Github</a></li>
                <li><a href="linkedin.com/in/rafael-sousa-61b654112">Linkedin</a></li>
            </ul>
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
            </QuemSomosCss>
        </div>
    )
}

export default QuemSomos;