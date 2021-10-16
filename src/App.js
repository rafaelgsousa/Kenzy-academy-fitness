import { Card, TextCard } from "./components/Card";

function App() {

  const handleClick = () => {
    alert("Clickou")
  }

  return (
    <>
      <Card background={"#ccc"} backgroundHover={"coral"} onClick={handleClick}>
        <TextCard>Name grupo</TextCard>
        <TextCard>Descrição grupo</TextCard>
        <TextCard>Categoria grupo</TextCard>
      </Card>
      <Card background={"#ccc"} height={"200px"} width={"250px"} backgroundHover={"coral"}>
        <TextCard>"title": "Calistenia a tarde (15 minutos)"</TextCard>
        <TextCard>"category": "Sáude"</TextCard>
        <TextCard>"difficulty": "Muito díficil"</TextCard>
        <TextCard>"frequency": "Diária"</TextCard>
        <TextCard>"achieved": false</TextCard>
        <TextCard>"how_much_achieved": 30</TextCard>
      </Card>
    </>
  );
}

export default App;
