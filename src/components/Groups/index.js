import { useContext, useEffect, useState } from "react";
import Container from "../../components/Container";
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button";
import { Card, TextCard } from "../../components/Card";
import { GroupsContext } from "../../providers/Groups";
import { Blur, Box, Content, Form } from "./style"
import { ButtonX } from "../../components/ButtonX";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { FiPlus, FiX } from "react-icons/fi";

export const GroupsComponent = () => {

    const { register, handleSubmit } = useForm()

    const [showCreateGroup, setShowCreateGroup] = useState(false)

    const [numberPage, setNumberPage] = useState(1)

    const history = useHistory()

    const [category, setCategory] = useState("")

    const { access, subscriptions, groupsOfCategory, getSubscription,
        getGroupsForCategory, deleteGroup, createGroup, subscribToAGroup } = useContext(GroupsContext)

    useEffect(() => {
        getSubscription()
        return (() => getSubscription())
        // eslint-disable-next-line
    }, [])

    const loadGroupsForCategory = () => {
        getGroupsForCategory(`?category=${category}&page=${numberPage}`)
    }

    useEffect(() => {
        loadGroupsForCategory()
        return (() => {
            getGroupsForCategory([])
        })
        // eslint-disable-next-line
    }, [])

    const onCreateCategory = (data) => {
        createGroup(data)
        getSubscription()
    }

    const handleAddPagination = () => {
        if (numberPage < Math.ceil(groupsOfCategory.data.count / 15)) setNumberPage(numberPage + 1)
        loadGroupsForCategory()
    }

    const handleSubPagination = () => {
        if (numberPage > 0 && numberPage !== 1) setNumberPage(numberPage - 1)
        loadGroupsForCategory()
    }

    return (
        <>
            <Box>
                <Blur />
                {showCreateGroup ?
                    <Container width={"600px"} height={"760px"}>
                        <h2>Criar Grupo</h2>
                        <Form onSubmit={handleSubmit(onCreateCategory)}>
                            <ButtonX style={{ fontSize: "1rem" }} onClick={() => {
                                getSubscription()
                                setShowCreateGroup(false)
                            }
                            } ><FiX /></ButtonX>
                            <Input placeholder="Nome do grupo" {...register("name")} width={"400px"} height={"50px"} />
                            <Input placeholder="Descrição" {...register("description")} width={"400px"} height={"50px"} />
                            <Input placeholder="Categoria" {...register("category")} width={"400px"} height={"50px"} />
                            <Button width={"340px"} height={"95px"} type="submit">Gravar</Button>
                        </Form>
                    </Container>
                    :
                    <Container width={"600px"} height={"760px"}>
                        <h2>Meu Grupos</h2>
                        <Content>
                            {
                                (subscriptions.data !== undefined) && subscriptions.data.map((group, index) =>
                                    <Card
                                        key={index}
                                        onClick={
                                            () => { history.push(`/modalgroups/${group.id}`) }
                                        }>

                                        <ButtonX
                                            onClick={
                                                (e) => {
                                                    e.stopPropagation()
                                                    deleteGroup(group.id, access)
                                                    getSubscription()
                                                }
                                            }><FiX /></ButtonX>
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
                    <Input
                        placeholder="Pesquisar por Categoria"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value)
                            setNumberPage(1)
                            loadGroupsForCategory()
                        }}
                        width={"590px"}
                        height={"35px"}
                    />
                    <Content>
                        {(groupsOfCategory.data !== undefined) && groupsOfCategory.data.results.map((groups, index) =>
                            <Card key={index} height={"50px"} onClick={() => history.push(`/modalgroups/${groups.id}`)}>
                                <TextCard>{groups.name}</TextCard>
                                <ButtonX
                                    onClick={
                                        (e) => {
                                            e.stopPropagation()
                                        }
                                    }><FiPlus /></ButtonX>
                            </Card>
                        )}
                    </Content>
                    <div>
                        {numberPage !== 1 &&
                            <Button
                                onClick={handleSubPagination}
                            >Previous</Button>
                        }
                        <span style={{ margin: "1rem" }}>{numberPage}</span>
                        {(numberPage < Math.ceil(groupsOfCategory.data.count / 15)) &&
                            <Button
                                onClick={handleAddPagination}
                            >Next</Button>
                        }
                    </div>
                </Container>
            </Box>
        </>
    )
}