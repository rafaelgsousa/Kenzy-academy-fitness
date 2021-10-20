import Container from '../Container'
import { Blur, Box, Content, GroupButton } from './styles'
import { Card, TextCard } from '../Card'
import { Button } from '../Button'
import { ButtonX } from '../ButtonX'
import { FiX } from 'react-icons/fi'
import { useContext, useEffect, useState } from 'react'
import { GroupsContext } from '../../providers/Groups'
import { ActivitesContext } from "../../providers/Activites";
import { GoalsContext } from "../../providers/Goals";
import { useHistory, useParams } from 'react-router';
import { Input } from '../Input';
import { useForm } from 'react-hook-form';


const ModalGroup = () => {

    const {register,handleSubmit} = useForm()

    const params = useParams();

    const [idgroup] = useState(params.id);

    const history = useHistory()

    const { activitesOfGroup, getGroupActivities } = useContext(ActivitesContext)

    const { goalsGroup, getGroupGoals } = useContext(GoalsContext)

    const { especificGroup, getEspecificGroup, updateGroup } = useContext(GroupsContext)

    console.log(activitesOfGroup)

    useEffect(() =>
        getEspecificGroup(idgroup)
        // eslint-disable-next-line
        , [])

    useEffect(() =>
        getGroupActivities(idgroup)
        // eslint-disable-next-line
        , [])

    useEffect(() =>
        getGroupGoals(idgroup)
        // eslint-disable-next-line
        , [])

    const [showActivities, setShowActivities] = useState(false)
    const [showObjects, setShowObjects] = useState(false)

    const handleShowActivities = () => setShowActivities(!showActivities)
    const handleShowObjects = () => setShowObjects(!showObjects)

    const [showListActivites,setShowListActivites] = useState(true)
    const [showCreateActivite,setShowCreateActivite] = useState(false)
    const [showEditActivite,setShowEditActivite] = useState(false)

    const showModalCreateActivite = ()=>{
        setShowCreateActivite(true)
        setShowListActivites(false)
        setShowEditActivite(false)
    }

    const showModalEditActivite = ()=>{
        setShowCreateActivite(false)
        setShowListActivites(false)
        setShowEditActivite(true)
    }

    const showModalListActivites = ()=>{
        setShowCreateActivite(false)
        setShowListActivites(true)
        setShowEditActivite(false)
    }

    const [showListGoals,setShowListGoals] = useState(true)
    const [showCreateGoal,setShowCreateGoal] = useState(false)
    const [showEditGoal,setShowEditGoal] = useState(false)

    const showModalCreateGoal = ()=>{
        setShowCreateGoal(true)
        setShowListGoals(false)
        setShowEditGoal(false)
    }

    const showModalEditGoal = ()=>{
        setShowCreateGoal(false)
        setShowListGoals(false)
        setShowEditGoal(true)
    }

    const showModalListGoal = ()=>{
        setShowCreateGoal(false)
        setShowListGoals(true)
        setShowEditGoal(false)
    }

    const [showDescriptionGroup,setShowDescriptionGroup] = useState(true)

    return (
        <Box>
            <Blur />
            <Content>
                {showActivities &&
                <>
                    { showListActivites ?
                    <Container width={"440px"} height={"700px"}>
                        <ButtonX onClick={handleShowActivities}><FiX /></ButtonX>
                        <h3>Atividades</h3>

                        {(activitesOfGroup.data !== undefined) && activitesOfGroup.data.results
                            .map((activite) =>
                                <Card key={activite.id} onClick={showModalEditActivite}>
                                    <ButtonX><FiX /></ButtonX>
                                    <TextCard>{activite.title}</TextCard>
                                    <TextCard>{activite.realization_time}</TextCard>
                                </Card>
                            )}
                        <Button onClick={showModalCreateActivite}>Criar Atividades</Button>
                    </Container>
                    : showCreateActivite ?
                    <Container width={"440px"} height={"700px"}>
                        <ButtonX onClick={showModalListActivites}><FiX /></ButtonX>
                        <h3>Criar Atividade</h3>
                        <form>
                            <Input {...register("title")} placeholder="Descrição"/>
                            <Input {...register("realization_time")} placeholder="Data para realizar"/>
                            <Button>Criar</Button>
                        </form>
                    </Container>
                    :
                    <Container width={"440px"} height={"700px"}>
                        <ButtonX onClick={showModalListActivites}><FiX /></ButtonX>
                        <h3>Editar Atividades</h3>
                        <Input {...register("title")} placeholder="Descrição"/>
                        <Input {...register("realization_time")} placeholder="Data para realizar"/>
                        <Button>Editar</Button>
                    </Container>
                    }   
                </>
                }
                { showDescriptionGroup ?
                <Container width={"670px"} height={"700px"}>
                    <ButtonX onClick={() => history.push('/groups')}><FiX /></ButtonX>
                    <h2>{(especificGroup.data !== undefined) && especificGroup.data.name}</h2>
                    <h3>{(especificGroup.data !== undefined) && especificGroup.data.category}</h3>
                    <Card width={"550px"} height={"300px"}>
                        <TextCard>{(especificGroup.data !== undefined) && especificGroup.data.description}</TextCard>
                    </Card>
                    <GroupButton>
                        <Button width={"250px"} height={"50px"} onClick={handleShowActivities}>Atividades</Button>
                        <Button width={"250px"} height={"50px"} onClick={handleShowObjects}>Objetivos</Button>
                    </GroupButton>
                    <Button width={"250px"} height={"50px"} onClick={()=>setShowDescriptionGroup(false)} >Editar Grupo</Button>
                </Container>
                :
                <Container width={"670px"} height={"700px"}>
                    <ButtonX onClick={() => setShowDescriptionGroup(true)}><FiX /></ButtonX>
                    <h2>Editar Grupo</h2>
                    <Input {...register("name")} placeholder="Nome"/>
                    <Input {...register("description")} placeholder="Descrição"/>
                    <Input {...register("category")} placeholder="Categória"/>
                    <Button width={"250px"} height={"50px"}>Editar Grupo</Button>
                </Container>
                }
                {showObjects &&
                    <>
                        { showListGoals ?
                        <Container width={"440px"} height={"700px"}>
                            <ButtonX onClick={handleShowObjects}><FiX /></ButtonX>
                            <h3>Objetivos</h3>
                            {(goalsGroup.data !== undefined) && goalsGroup.data.results
                                .map((goal, index) =>
                                    <Card key={index} onClick={showModalEditGoal}>
                                        <ButtonX><FiX /></ButtonX>
                                        <TextCard>{goal.title}</TextCard>
                                        <TextCard>{goal.difficulty}</TextCard>
                                        <TextCard>{goal.how_much_achieved}</TextCard>
                                    </Card>
                                )}
                            <Button onClick={showModalCreateGoal}>Criar Objetivos</Button>
                        </Container>
                        :showCreateGoal?
                        <Container width={"440px"} height={"700px"}>
                            <ButtonX onClick={showModalListGoal}><FiX /></ButtonX>
                            <h3>Criar Objetivos</h3>
                            <Input {...register("title")} placeholder="Descrição"/>
                            <Input {...register("difficulty")} placeholder="dificuldade"/>
                            <Input {...register("how_much_achieved")} placeholder="Quantidade"/>
                            <Button>Criar</Button>
                        </Container>
                        :
                        <Container width={"440px"} height={"700px"}>
                            <ButtonX onClick={showModalListGoal}><FiX /></ButtonX>
                            <h3>EditarObjetivos</h3>
                            <Input {...register("title")} placeholder="Descrição"/>
                            <Input {...register("difficulty")} placeholder="dificuldade"/>
                            <Input {...register("how_much_achieved")} placeholder="Quantidade"/>
                            <label>
                            <Input type="checkbox" value={true} {...register("achieved")}/>
                            </label>
                            <Button>Editar</Button>
                        </Container>
                        }
                    </>
                }
            </Content>
        </Box>
    )
}

export default ModalGroup
