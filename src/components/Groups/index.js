import { useContext, useEffect, useState } from "react";
import Container from "../../components/Container";
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button";
import { Card, TextCard } from "../../components/Card";
import { GroupsContext } from "../../providers/Groups";
import { Box, Content } from "./style"
import { ButtonX } from "../../components/ButtonX";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import ModalGroup from '../../components/ModalGroup'
import { FiPlus, FiX } from "react-icons/fi"

export const GroupsComponent = () => {

    const { register, handleSubmit } = useForm()

    const [showCreateGroup, setShowCreateGroup] = useState(false)

    const history = useHistory()

    const [category, setCategory] = useState("")

    const { access, subscriptions, groupsOfCategory, getSubscription,
        getGroupsForCategory, deleteGroup, createGroup, subscribToAGroup } = useContext(GroupsContext)

    useEffect(() =>
        getSubscription()
        , [])

    useEffect(() =>
        getGroupsForCategory(category)
        , [category])

    const onCreateCategory = (data) => createGroup(data)

    return (
        <>
            <Box>
                {showCreateGroup ?
                    <Container width={"600px"} height={"760px"}>
                        <h2>Criar Grupo</h2>
                        <form onSubmit={handleSubmit(onCreateCategory)}>
                            <ButtonX onClick={() => setShowCreateGroup(false)}><FiX /></ButtonX>
                            <Input placeholder="Nome do grupo" {...register("name")} />
                            <Input placeholder="Descrição" {...register("description")} />
                            <Input placeholder="Categoria" {...register("category")} />
                            <Button type="submit">Create group</Button>
                        </form>
                    </Container>
                    :
                    <Container width={"600px"} height={"760px"}>
                        <h2>Meu Grupos</h2>
                        <Content>
                            {
                                !!subscriptions.data && subscriptions.data.map((group, index) =>
                                    <Card key={index} /*onClick={toShowModalGroup}*/>
                                        <ButtonX onClick={() => deleteGroup(group.id, access)}><FiX /></ButtonX>
                                        <TextCard>{group.name}</TextCard>
                                        <TextCard>{group.description}</TextCard>
                                        <TextCard>{group.category}</TextCard>
                                    </Card>
                                )
                            }
                            <Button width={"340px"} height={"95px"} onClick={() => setShowCreateGroup(true)}>Criar Grupo</Button>
                        </Content>
                    </Container>
                }
                <Container width={"1140px"} height={"760px"} >
                    <h2>Procurar Grupos</h2>
                    <Input placeholder="Pesquisar por Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <Content>
                        {(groupsOfCategory.data !== undefined) && groupsOfCategory.data.results.map((groups, index) =>
                            <Card key={index} height={"50px"} /*onClick={toShowModalGroup}*/>
                                <TextCard>{groups.name}</TextCard>
                                <ButtonX><FiPlus /></ButtonX>
                            </Card>
                        )}
                    </Content>
                </Container>
            </Box>
            {/* {
                !!showModal && <ModalGroup />
            } */}
        </>
    )
}