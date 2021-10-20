import { useContext, useEffect,useState } from "react";
import Container from "../../components/Container";
import {Input} from "../../components/Input/index";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { GroupsContext} from "../../providers/Groups";
import {Main} from "./style"
import { ButtonX } from "../../components/ButtonX";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

export const GroupsComponent = () => {

    const {register,handleSubmit}= useForm()

    const [showCreateGroup,setShowCreateGroup] = useState(false)

    const history = useHistory()

    const [category,setCategory] = useState("")

    const {access,subscriptions,groupsOfCategory,getSubscription,
        getGroupsForCategory,deleteGroup,createGroup} = useContext(GroupsContext)

    useEffect(()=>{
        console.log("Effect 1 funcionou")
        return getSubscription()
    },[])

    useEffect(()=>{
        console.log("effect 2 funcionu")
        return getGroupsForCategory(category)
    },[category])

    const onCreateCategory = (data) => createGroup(data)
    
    return (
        <>
            <Main>
            {console.log("inscriçoes:",subscriptions)}
            {console.log("categoria:",groupsOfCategory)}
                { showCreateGroup ?
                <form style={{height:"400px",width:"300px",opacity:"0.7",backgroundColor:"#007aff"}} onSubmit={handleSubmit(onCreateCategory)}>
                    <p style={{width:"100%",textAlign:"right",cursor:"pointer"}} onClick={()=>setShowCreateGroup(false)}>X</p>
                    <Card height="30px" width="80%">Group</Card>
                        <Input placeholder="Nome do grupo" {...register("name")}/>
                        <Input placeholder="Descrição" {...register("description")}/>
                        <Input placeholder="Categoria" {...register("category")}/>
                    <Button type="submit">Create group</Button>
                </form>
                :
                <Container height="400px" width="300px" opacity="0.7">
                    <Card height="30px" width="80%">Create</Card>
                    {!!subscriptions && subscriptions.data.map((group,index)=>
                            <Card key={index} width="150px" height="40px">
                                <p>{group.name}<ButtonX onClick={()=>deleteGroup(group.id,access)}>X</ButtonX></p>
                            </Card>
                        )}
                    <Button onClick={()=>setShowCreateGroup(true)}>Create group</Button>
                </Container>
                }
                <Container height="400px" width="600px" opacity="0.7">
                    <Card height="30px" width="80%" >Procurar Grupos</Card>
                    <Input placeholder="search by category" value={category} onChange={(e)=>setCategory(e.target.value)} width="80%"/>
                    <ul style={{display:"flex",flexWrap:"wrap",
                    justifyContent:"space-around",alignItems:"center",padding:"5px 30px"}}>
                        {!!groupsOfCategory && groupsOfCategory.data.results.map((group,index)=>
                            <Card key={index} width="150px" height="40px" onClick={()=>history.push(`/modalgroups/${group.id}`)}>
                                <p>{group.name}</p>
                            </Card>
                        )}
                    </ul>
                </Container>
            </Main>
            <Card width="100%">Copyright 2021 Todos os diretos reservados.</Card>
        </>
    )
}