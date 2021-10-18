import Container from './../../components/Container'
import { Content, GroupButton } from './styles'
import { Card, TextCard } from './../../components/Card'
import { Button } from './../../components/Button'

const ModalGroup = () => {
    return (
        <>
            <Content>
                <Container width={"440px"} height={"700px"} opacity={"0.7"}>
                    <h3>Atividades</h3>
                </Container>
                <Container width={"670px"} height={"700px"} opacity={"0.7"}>
                    <h2>Nome do Grupo</h2>
                    <h3>Categoria</h3>
                    <Card width={"550px"} height={"300px"}>
                        <TextCard>Descrição do Grupo</TextCard>
                    </Card>
                    <GroupButton>
                        <Button>Atividades</Button>
                        <Button>Objetivos</Button>
                    </GroupButton>
                    <Button>Editar Grupo</Button>
                </Container>
                <Container width={"440px"} height={"700px"} opacity={"0.7"}>
                    <h3>Objetivos</h3>
                </Container>
            </Content>
        </>
    )
}

export default ModalGroup
