import {useHistory} from "react-router"

const Home = () => {

    const history = useHistory()

    return(
        <div>
            <nav onClick={() => history.push("/login")}>login</nav>
            <nav onClick={() => history.push("/signUp")}>Sign Up</nav>
        </div>
    )
}

export default Home