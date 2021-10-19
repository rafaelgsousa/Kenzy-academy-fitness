import { Box, Content } from "./syles"
import Container from './../../components/Container'
import { Card } from './../../components/Card'
import { ButtonX } from './../../components/ButtonX'
import { Button } from './../../components/Button'
import { FiX } from 'react-icons/fi'

const Group = () => {
    return (
        <Box>
            <Container width={"600px"} height={"760px"} opacity={"0.7"}>
                <h2>Meu Grupos</h2>
                <Content>
                    <Card>
                        <ButtonX><FiX /></ButtonX>

                    </Card>
                    <Button width={"340px"} height={"95px"}>Criar Grupo</Button>
                </Content>
            </Container>
            <Container width={"1140px"} height={"760px"} opacity={"0.7"}>
                <h2>Procurar Grupos</h2>
                <Content>
                    <Card>
                        <ButtonX><FiX /></ButtonX>
                    </Card>
                    <Card>
                        <ButtonX><FiX /></ButtonX>
                    </Card>
                    <Card>
                        <ButtonX><FiX /></ButtonX>
                    </Card>
                    <Card>
                        <ButtonX><FiX /></ButtonX>
                    </Card>
                </Content>
            </Container>
        </Box>
    )
}

export default Group
