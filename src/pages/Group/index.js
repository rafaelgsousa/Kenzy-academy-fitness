import { Box, Content } from "./syles"
import Container from './../../components/Container'
import { Card } from './../../components/Card'
import { ButtonX } from './../../components/ButtonX'
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
                </Content>
            </Container>
            <Container width={"1140px"} height={"760px"} opacity={"0.7"}>
                <h2>Procurar Grupos</h2>
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
            </Container>
        </Box>
    )
}

export default Group
