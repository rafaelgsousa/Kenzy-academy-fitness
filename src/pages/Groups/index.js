import { useContext, useEffect, useState } from "react";
import Container from "../../components/Container";
import { Button } from "../../components/Button";
import { Card, TextCard } from "../../components/Card";
import { GroupsContext } from "../../providers/Groups";
import { Blur, Box, Content, Input } from "./style"
import { ButtonX } from "../../components/ButtonX";
import { FiPlus, FiX } from "react-icons/fi";
import ModalGroup from '../../components/ModalGroup'

export const Groups = () => {

    const [category, setCategory] = useState("")

    const { access, subscriptions, groupsOfCategory, getSubscription,
        getGroupsForCategory, deleteGroup, toShowModalGroup, showModal } = useContext(GroupsContext)

    useEffect(() => {
        getSubscription()
    }, [])

    useEffect(() => {
        getGroupsForCategory(category)
    }, [category])


    return (
        <>
            <Box>
                <Blur />
                <Container width={"600px"} height={"760px"}>
                    <h2>Meu Grupos</h2>
                    <Content>
                        {
                            !!subscriptions.data && subscriptions.data.map((group, index) =>
                                <Card key={index} onClick={toShowModalGroup}>
                                    <ButtonX onClick={() => deleteGroup(group.id, access)}><FiX /></ButtonX>
                                    <TextCard>{group.name}</TextCard>
                                    <TextCard>{group.description}</TextCard>
                                    <TextCard>{group.category}</TextCard>
                                </Card>
                            )
                        }
                        <Button width={"340px"} height={"95px"}>Criar Grupo</Button>
                    </Content>
                </Container>
                <Container width={"1140px"} height={"760px"} >
                    <h2>Procurar Grupos</h2>
                    <Input placeholder="Pesquisar por Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <Content>
                        {(groupsOfCategory.data !== undefined) && groupsOfCategory.data.results.map((groups, index) =>
                            <Card key={index} height={"50px"} onClick={toShowModalGroup}>
                                <TextCard>{groups.name}</TextCard>
                                <ButtonX><FiPlus /></ButtonX>
                            </Card>
                        )}
                    </Content>
                </Container>
            </Box>
            {
                !!showModal && <ModalGroup />
            }
        </>
    )
}