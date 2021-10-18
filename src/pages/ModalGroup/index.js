import Container from './../../components/Container'
import { Blur, Content, GroupButton } from './styles'
import { Card, TextCard } from './../../components/Card'
import { Button } from './../../components/Button'
import { ButtonX } from './../../components/ButtonX'
import { FiX } from 'react-icons/fi'
import { useState } from 'react'

const ModalGroup = () => {

    const [showActivities, setShowActivities] = useState(false)
    const [showObjects, setShowObjects] = useState(false)

    const handleShowActivities = () => setShowActivities(!showActivities)
    const handleShowObjects = () => setShowObjects(!showObjects)

    return (
        <>
            <Blur />
            <Content>
                {showActivities &&
                    <Container width={"440px"} height={"700px"} opacity={"0.7"}>
                        <ButtonX onClick={handleShowActivities}><FiX /></ButtonX>
                        <h3>Atividades</h3>
                        <Card>
                            <ButtonX><FiX /></ButtonX>
                        </Card>
                        <Card>
                            <ButtonX><FiX /></ButtonX>
                        </Card>
                        <Button>Criar Atividades</Button>
                    </Container>
                }

                <Container width={"670px"} height={"700px"} opacity={"0.7"}>
                    <ButtonX><FiX /></ButtonX>
                    <h2>Nome do Grupo</h2>
                    <h3>Categoria</h3>
                    <Card width={"550px"} height={"300px"}>
                        <TextCard>Descrição do Grupo</TextCard>
                    </Card>
                    <GroupButton>
                        <Button width={"250px"} height={"50px"} onClick={handleShowActivities}>Atividades</Button>
                        <Button width={"250px"} height={"50px"} onClick={handleShowObjects}>Objetivos</Button>
                    </GroupButton>
                    <Button width={"250px"} height={"50px"}>Editar Grupo</Button>
                </Container>

                {showObjects &&
                    <Container width={"440px"} height={"700px"} opacity={"0.7"}>
                        <ButtonX onClick={handleShowObjects}><FiX /></ButtonX>
                        <h3>Objetivos</h3>
                        <Card>
                            <ButtonX><FiX /></ButtonX>
                        </Card>
                        <Button>Criar Objetivos</Button>
                    </Container>
                }
            </Content>
        </>
    )
}

export default ModalGroup
