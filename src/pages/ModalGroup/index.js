import Container from './../../components/Container'
import { Blur, Content, GroupButton } from './styles'
import { Card, TextCard } from './../../components/Card'
import { Button } from './../../components/Button'
import { ButtonX } from './../../components/ButtonX'

const ModalGroup = () => {
    return (
        <>
            <Blur />
            <Content>
                <Container width={"440px"} height={"700px"} opacity={"0.7"}>
                    <h3>Atividades</h3>
                </Container>
                <Container width={"670px"} height={"700px"} opacity={"0.7"}>
                    <ButtonX width={"50px"} height={"50px"} color={"white"} />
                    <h2>Nome do Grupo</h2>
                    <h3>Categoria</h3>
                    <Card width={"550px"} height={"300px"}>
                        <TextCard>Descrição do Grupo</TextCard>
                    </Card>
                    <GroupButton>
                        <Button width={"250px"} height={"50px"}>Atividades</Button>
                        <Button width={"250px"} height={"50px"}>Objetivos</Button>
                    </GroupButton>
                    <Button width={"250px"} height={"50px"}>Editar Grupo</Button>
                </Container>
                <Container width={"440px"} height={"700px"} opacity={"0.7"}>
                    <h3>Objetivos</h3>
                </Container>
            </Content>
        </>
    )
}

export default ModalGroup
