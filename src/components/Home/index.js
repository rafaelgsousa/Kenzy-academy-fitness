import {useHistory} from "react-router"
import { HomeCss } from "../HomeCss"
import { Button } from "../Button"

const Home = () => {

    const history = useHistory()

    return(
        <div>
            <HomeCss>
                <header>
                    <div className="nav">
                        <nav onClick={() => history.push("/login")} className="login">Login</nav>
                        <nav onClick={() => history.push("/signUp")} className="signup">Sign Up</nav>
                    </div>
                    <Button>Quem Somos</Button>
                    <Button>Planos</Button>
                </header>
                <footer>
                    <p>© Copyright 2021. Todos os direitos reservados. Kenzie Estrutura Fitness.</p>
                </footer>
            </HomeCss>
            
            
        </div>
    )
}

export default Home