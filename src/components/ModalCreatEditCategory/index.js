import Container from '../Container'
import { Blur, Content } from './styles'
import { Card, TextCard } from '../Card'
import { Button } from '../Button'
import { ButtonX } from '../ButtonX'
import { FiX } from 'react-icons/fi'
import { useState } from 'react'

import { Input } from './../../components/Input'

const ModalCreatEditCategory = () => {

    const [showModalCategory, setShowModalCategory] = useState(false)

    const handleShowModalCategory = () => setShowModalCategory(!showModalCategory)

    return (
        <>
            <Blur />
            <Content>
                {/* {showModalCategory && */}
                <Container width={"670px"} height={"700px"}>
                    <ButtonX onClick={handleShowModalCategory}><FiX /></ButtonX>
                    <h3>Categoria</h3>
                    <Card width={"295px"} height={"75px"}>
                        <Input placeholder="Título" width={"100%"} height={"100%"} />
                    </Card>
                    <Card width={"295px"} height={"75px"}>
                        <Input placeholder="Categoria" width={"100%"} height={"100%"} />
                    </Card>
                    <Card width={"560px"} height={"240px"}>
                        <TextCard>
                            descrição
                        </TextCard>
                    </Card>

                    <Button width={"235px"} height={"75px"}>Criar Categoria</Button>
                </Container>
                {/* } */}
            </Content>
        </>
    )
}

export default ModalCreatEditCategory
