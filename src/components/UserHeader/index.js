import { Header, NavBar, Logo, GroupButton } from "./styles";
import { Button } from "../Button";
import { useHistory } from "react-router";
import logoImg from "../../assets/img/logo.png";

function UserHeader({ path }) {
  const history = useHistory();

  if (path === 1) {
    return (
      <Header>
        <Logo>
          <img src={logoImg} alt="logo" />
        </Logo>
        <NavBar />
        <GroupButton>
          <Button
            cordefundo={"#007AFF"}
            textcolor={"#fff"}
            width={"200px"}
            height={"50px"}
            onClick={() => history.push("/")}
          >
            Home
          </Button>
          <Button
            cordefundo={"#007AFF"}
            textcolor={"#fff"}
            width={"200px"}
            height={"50px"}
            onClick={() => {
              localStorage.clear();
              history.push("/");
            }}
          >
            Logout
          </Button>
        </GroupButton>
      </Header>
    );
  }

  if (path === 2) {
    return (
      <Header>
        <NavBar />
        <GroupButton>
          <Button
            cordefundo={"#007AFF"}
            textcolor={"#fff"}
            width={"200px"}
            height={"50px"}
            onClick={() => history.push("/")}
          >
            Home
          </Button>
          <Button
            cordefundo={"#007AFF"}
            textcolor={"#fff"}
            width={"200px"}
            height={"50px"}
            onClick={() => {
              history.push("/dashboard");
            }}
          >
            Dashboard
          </Button>
          <Button
            cordefundo={"#007AFF"}
            textcolor={"#fff"}
            width={"200px"}
            height={"50px"}
            onClick={() => {
              localStorage.clear();
              history.push("/");
            }}
          >
            Logout
          </Button>
        </GroupButton>
      </Header>
    );
  }
}

export default UserHeader;
