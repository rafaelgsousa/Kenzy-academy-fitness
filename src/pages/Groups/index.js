import { useContext, useEffect, useState } from "react";
import Container from "../../components/Container";
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { GroupsContext } from "../../providers/Groups";
import { Main } from "./style"
import { ButtonX } from "../../components/ButtonX";

export const Groups = () => {

    const [category, setCategory] = useState("")

    const { access, subscriptions, groupsOfCategory, getSubscription,
        getGroupsForCategory, deleteGroup } = useContext(GroupsContext)



    useEffect(() => {
        getSubscription()
    }, [])

    useEffect(() => {
        console.log("category:", category)
        getGroupsForCategory(category)
    }, [category])


    return (
        <>
            <Main>
                <Container height="400px" width="300px" opacity="0.9">
                    <Card height="30px" width="80%">My Groups</Card>
                    {console.log(subscriptions)}
                    {!!subscriptions.data && subscriptions.data.map((group, index) =>
                        <Card key={index} width="150px" height="40px">
                            <p>{group.name}<ButtonX onClick={() => deleteGroup(group.id, access)}>X</ButtonX></p>
                        </Card>
                    )}
                    <Button>Create group</Button>
                </Container>
                <Container height="400px" width="600px" opacity="0.9">
                    <Card height="30px" width="80%" >Procurar Grupos</Card>
                    <Input placeholder="search by category" value={category} onChange={(e) => setCategory(e.target.value)} width="80%" />
                    <ul style={{
                        display: "flex", flexWrap: "wrap",
                        justifyContent: "space-around", alignItems: "center", padding: "5px 30px"
                    }}>
                        {console.log("categoria:", groupsOfCategory)}
                        {!!groupsOfCategory.data.results && groupsOfCategory.data.results.map((groups, index) =>
                            <Card key={index} width="150px" height="40px">
                                <p>{groups.name}</p>
                            </Card>
                        )}
                    </ul>
                </Container>
            </Main>
            <Card width="100%">Copyright 2021 Todos os diretos reservados.</Card>
        </>

        // <Box>
        //     <Blur />
        //     <Container width={"600px"} height={"760px"} opacity={"0.7"}>
        //         <h2>Meu Grupos</h2>
        //         <Content>
        //             <Card>
        //                 <ButtonX><FiX /></ButtonX>
        //                 <TextCard>Grupo novo 1</TextCard>
        //                 <TextCard>Descrição bolada</TextCard>
        //                 <TextCard>Saúde</TextCard>
        //             </Card>
        //             <Card>
        //                 <ButtonX><FiX /></ButtonX>
        //                 <TextCard>Grupo novo 2</TextCard>
        //                 <TextCard>Descrição bolada</TextCard>
        //                 <TextCard>Saúde</TextCard>
        //             </Card>
        //             <Card>
        //                 <ButtonX><FiX /></ButtonX>
        //                 <TextCard>Grupo novo 3</TextCard>
        //                 <TextCard>Descrição bolada</TextCard>
        //                 <TextCard>Saúde</TextCard>
        //             </Card>
        //             <Card>
        //                 <ButtonX><FiX /></ButtonX>
        //                 <TextCard>Grupo novo 4</TextCard>
        //                 <TextCard>Descrição bolada</TextCard>
        //                 <TextCard>Saúde</TextCard>
        //             </Card>
        //             <Button width={"340px"} height={"95px"}>Criar Grupo</Button>
        //         </Content>
        //     </Container>
        //     <Container width={"1140px"} height={"760px"} opacity={"0.7"}>
        //         <h2>Procurar Grupos</h2>
        //         <Input placeholder="Pesquisar por Categoria" />
        //         <Content>
        //             <Card>
        //                 <ButtonX><FiX /></ButtonX>
        //                 <TextCard>Grupo novo 1</TextCard>
        //                 <TextCard>Descrição bolada</TextCard>
        //                 <TextCard>Saúde</TextCard>
        //             </Card>
        //             <Card>
        //                 <ButtonX><FiX /></ButtonX>
        //                 <TextCard>Grupo novo 2</TextCard>
        //                 <TextCard>Descrição bolada</TextCard>
        //                 <TextCard>Saúde</TextCard>
        //             </Card>
        //             <Card>
        //                 <ButtonX><FiX /></ButtonX>
        //                 <TextCard>Grupo novo 3</TextCard>
        //                 <TextCard>Descrição bolada</TextCard>
        //                 <TextCard>Saúde</TextCard>
        //             </Card>
        //             <Card>
        //                 <ButtonX><FiX /></ButtonX>
        //                 <TextCard>Grupo novo 4</TextCard>
        //                 <TextCard>Descrição bolada</TextCard>
        //                 <TextCard>Saúde</TextCard>
        //             </Card>
        //         </Content>
        //     </Container>
        // </Box>
    )
}