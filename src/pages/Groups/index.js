import { useContext, useEffect,useState } from "react";
import Container from "../../components/Container";
import {Input} from "../../components/Input/index";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { GroupsContext} from "../../providers/Groups";
import {Main} from "./style"
import { ButtonX } from "../../components/ButtonX";

export const Groups = () => {

    const [category,setCategory] = useState("")

    const {access,subscriptions,groupsOfCategory,getSubscription,
        getGroupsForCategory,deleteGroup} = useContext(GroupsContext)
    
    

    useEffect(()=>{
        getSubscription()
    },[])

    useEffect(()=>{
        console.log("category:",category)
        getGroupsForCategory(category)
    },[category])


    return (
        <>
            <Main>
                <Container height="400px" width="300px" opacity="0.9">
                    <Card height="30px" width="80%">My Groups</Card>
                    {console.log(subscriptions)}
                    {subscriptions.data.map((group,index)=>
                            <Card key={index} width="150px" height="40px">
                                <p>{group.name}<ButtonX onClick={()=>deleteGroup(group.id,access)}>X</ButtonX></p>
                            </Card>
                        )}
                    <Button>Create group</Button>
                </Container>
                <Container height="400px" width="600px" opacity="0.9">
                    <Card height="30px" width="80%" >Procurar Grupos</Card>
                    <Input placeholder="search by category" value={category} onChange={(e)=>setCategory(e.target.value)} width="80%"/>
                    <ul style={{display:"flex",flexWrap:"wrap",
                    justifyContent:"space-around",alignItems:"center",padding:"5px 30px"}}>
                        {console.log("categoria:",groupsOfCategory)}
                        {groupsOfCategory.data.results.map((groups,index)=>
                            <Card key={index} width="150px" height="40px">
                                <p>{groups.name}</p>
                            </Card>
                        )}
                    </ul>
                </Container>
            </Main>
            <Card width="100%">Copyright 2021 Todos os diretos reservados.</Card>
        </>
    )
}