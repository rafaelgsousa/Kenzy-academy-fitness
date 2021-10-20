import Container from '../Container'
import { Blur, Content } from './styles'
import { Card } from '../Card'
import { Button } from '../Button'
import { ButtonX } from '../ButtonX'
import { FiX } from 'react-icons/fi'
import { useState } from 'react'

import { Input } from './../../components/Input'

const ModalCreatEditActivities = () => {

    const [showModalActivities, setShowModalActivities] = useState(false)

    const handleShowModalActivities = () => setShowModalActivities(!showModalActivities)

    return (
        <>
            <Blur />
            <Content>
                {/* {showModalActivities && */}
                <Container width={"440px"} height={"700px"} opacity={"0.7"}>
                    <ButtonX onClick={handleShowModalActivities}><FiX /></ButtonX>
                    <h3>Atividades</h3>
                    <Card width={"295px"} height={"75px"}>
                        <Input placeholder="Título" width={"100%"} height={"100%"} />
                    </Card>
                    <Card width={"295px"} height={"75px"}>
                        <Input placeholder="Tempo" width={"100%"} height={"100%"} />
                    </Card>

                    <Button width={"235px"} height={"75px"}>Criar Atividades</Button>
                </Container>
                {/* } */}
            </Content>
        </>
    )
}

export default ModalCreatEditActivities
