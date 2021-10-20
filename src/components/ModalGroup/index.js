import Container from '../Container'
import { Blur, Content, GroupButton } from './styles'
import { Card, TextCard } from '../Card'
import { Button } from '../Button'
import { ButtonX } from '../ButtonX'
import { useEffect, useState } from 'react'
import { useContext } from 'react';
import {ActivitesContext} from "../../providers/Activites";
import {GoalsContext} from "../../providers/Goals";
import { GroupsContext } from '../../providers/Groups';
import { useParams } from 'react-router';


const ModalGroup = () => {

    const params = useParams();

    const [idgroup]=useState(params.id);

    const {activitesOfGroup,getGroupActivities} = useContext(ActivitesContext)

    const {goalsGroup,getGroupGoals}= useContext(GoalsContext)

    const {especificGroup,getEspecificGroup,updateGroup} = useContext(GroupsContext)

    useEffect(()=>console.log("Effect funcionando"),[])

    useEffect(()=>
        getEspecificGroup(idgroup)
    ,[])

    

    const [showActivities, setShowActivities] = useState(false)
    const [showObjects, setShowObjects] = useState(false)

    const handleShowActivities = () => setShowActivities(!showActivities)
    const handleShowObjects = () => setShowObjects(!showObjects)

    return (
        <>
        {console.log(idgroup)}
            <Blur />
            <Content>
                {showActivities &&
                    <Container width={"440px"} height={"700px"} opacity={"0.7"}>
                        <ButtonX onClick={handleShowActivities}>X</ButtonX>
                        <h3>Atividades</h3>
                        <Card>
                            <ul>
                            {!!especificGroup.data.activites && especificGroup.data.activites
                            .map((activite,index)=><li>
                                <ButtonX>X</ButtonX>
                                <p>{activite}</p>
                            </li>)}
                            </ul>
                        </Card>
                        
                        <Button>Criar Atividades</Button>
                    </Container>
                }

                <Container width={"670px"} height={"700px"} opacity={"0.7"}>
                    {console.log("especifico grupo",especificGroup)}
                    <ButtonX>X</ButtonX>
                    <h2>{!!especificGroup.data.name && especificGroup.data.name}</h2>
                    <h3>{!!especificGroup.data.category && especificGroup.data.category}</h3>
                    <Card width={"550px"} height={"300px"}>
                        <TextCard>{!!especificGroup.data.description && especificGroup.data.description}</TextCard>
                    </Card>
                    <GroupButton>
                        <Button width={"250px"} height={"50px"} onClick={handleShowActivities}>Atividades</Button>
                        <Button width={"250px"} height={"50px"} onClick={handleShowObjects}>Objetivos</Button>
                    </GroupButton>
                    <Button width={"250px"} height={"50px"}>Editar Grupo</Button>
                </Container>

                {showObjects &&
                    <Container width={"440px"} height={"700px"} opacity={"0.7"}>
                        <ButtonX onClick={handleShowObjects}>X</ButtonX>
                        <h3>Objetivos</h3>
                        <Card>
                        <ul>
                            {!!especificGroup.data.goals && especificGroup.data.goals
                            .map((activite,index)=><li>
                                <ButtonX>X</ButtonX>
                                <p>{activite}</p>
                            </li>)}
                            </ul>
                        </Card>
                        <Button>Criar Objetivos</Button>
                    </Container>
                }
            </Content>
        </>
    )
}

export default ModalGroup
