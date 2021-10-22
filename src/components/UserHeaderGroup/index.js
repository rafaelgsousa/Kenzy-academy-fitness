import { Header, NavBar, GroupButton } from "./styles";
import { Button } from "../Button";
import { useHistory } from "react-router";

function UserHeaderGroup() {
  const history = useHistory();

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
          onClick={() => history.push("/dashboard")}
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

export default UserHeaderGroup;
