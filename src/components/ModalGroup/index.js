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

    const { register, handleSubmit } = useForm()

    const params = useParams();

    const [idgroup] = useState(params.id);

    const history = useHistory()

    const { activitesOfGroup, getGroupActivities, createActivites, updateActivity, deleteActivity } = useContext(ActivitesContext)

    const [idActivite, setIdActivite] = useState(null)

    const { goalsGroup, getGroupGoals, createGoal, updateGoal, deleteGoal } = useContext(GoalsContext)

    const [idGoal, setIdGoal] = useState(null)

    const { especificGroup, getEspecificGroup, updateGroup } = useContext(GroupsContext)

    useEffect(() =>
        getEspecificGroup(idgroup)
        // eslint-disable-next-line
        , [])

    useEffect(() => 
        getGroupActivities(idgroup)
        // eslint-disable-next-line
    , [activitesOfGroup])

    useEffect(() => 
        getGroupGoals(idgroup)
        // eslint-disable-next-line
    , [goalsGroup])

    const [showActivities, setShowActivities] = useState(false)
    const [showObjects, setShowObjects] = useState(false)

    const handleShowActivities = () => setShowActivities(!showActivities)
    const handleShowObjects = () => setShowObjects(!showObjects)

    const [showListActivites, setShowListActivites] = useState(true)
    const [showCreateActivite, setShowCreateActivite] = useState(false)
    // eslint-disable-next-line
    const [showEditActivite, setShowEditActivite] = useState(false)

    const showModalCreateActivite = () => {
        setShowCreateActivite(true)
        setShowListActivites(false)
        setShowEditActivite(false)
    }

    const showModalEditActivite = () => {
        setShowCreateActivite(false)
        setShowListActivites(false)
        setShowEditActivite(true)
    }

    const showModalListActivites = () => {
        setShowCreateActivite(false)
        setShowListActivites(true)
        setShowEditActivite(false)
    }

    const [showListGoals, setShowListGoals] = useState(true)
    const [showCreateGoal, setShowCreateGoal] = useState(false)
    // eslint-disable-next-line
    const [showEditGoal, setShowEditGoal] = useState(false)

    const showModalCreateGoal = () => {
        setShowCreateGoal(true)
        setShowListGoals(false)
        setShowEditGoal(false)
    }

    const showModalEditGoal = () => {
        setShowCreateGoal(false)
        setShowListGoals(false)
        setShowEditGoal(true)
    }

    const showModalListGoal = () => {
        setShowCreateGoal(false)
        setShowListGoals(true)
        setShowEditGoal(false)
    }

    const [showDescriptionGroup, setShowDescriptionGroup] = useState(true)

    //Funções para criar, editar e deletar atividades

    const onCreateActives = ({ title, time }) => {
        const realization_time = `${time.split("-").reverse().join("-")}T00:00:00Z`;
        const group = Number(idgroup)
        return createActivites({ title, realization_time, group })
    }

    const onEditActivite = ({ title, time }) => {
        const realization_time = `${time.split("-").reverse().join("-")}T00:00:00Z`;

        if (title === "") {
            updateActivity({ realization_time }, idActivite)
        }
        if (time === "") {
            updateActivity({ title }, idActivite)
        }
        if ((title !== "") && (time !== "")) {
            updateActivity({ title, realization_time }, idActivite)
        }
    }

    //Funções para criar, editar e deletar metas

    const onCreateGoal = (data) => {
        const group = Number(idgroup)
        console.log({ ...data, group })
        createGoal({ ...data, group })
    }

    const onUpdateGoal = ({ title, difficulty, how_much_achieved, achieved }) => {
        const id = Number(idGoal)

        if (title === "" && difficulty === "" && how_much_achieved === "") {
            updateGoal({ achieved }, id)
        }
        else if (title === "" && difficulty === "") {
            updateGoal({ how_much_achieved, achieved }, id)
        }
        else if (title === "" && how_much_achieved === "") {
            updateGoal({ difficulty, achieved }, id)
        }
        else if (how_much_achieved === "" && difficulty === "") {
            updateGoal({ title, achieved }, id)
        }
        else if (title === "") {
            updateGoal({ difficulty, how_much_achieved, achieved }, id)
        }
        else if (difficulty === "") {
            updateGoal({ title, how_much_achieved, achieved }, id)
        }
        else if (how_much_achieved === "") {
            updateGoal({ title, difficulty, achieved }, id)
        } else {
            updateGoal({ title, difficulty, how_much_achieved, achieved }, id)
        }

    }

    //Funções de Grupo

    const onUpdateGroup = ({ name, description, category }) => {
        const id = idgroup

        if (description === "" && category === "") {
            updateGroup({ name }, id)
        }
        else if (name === "" && category === "") {
            updateGroup({ description }, id)
        }
        else if (name === "" && description === "") {
            updateGroup({ category }, id)
        }
        else if (category === "") {
            updateGroup({ name, description }, id)
        }
        else if (description === "") {
            updateGroup({ name, category }, id)
        }
        else if (name === "") {
            updateGroup({ description, category }, id)
        }
        else {
            updateGroup({ name, description, category }, id)
        }
    }

    return (
        <Box>
            <Blur />
            <Content>
                {showActivities &&
                    <>
                        {showListActivites ?
                            <Container width={"440px"} height={"700px"}>
                                <ButtonX onClick={handleShowActivities}><FiX /></ButtonX>
                                <h3>Atividades</h3>
                                <div style={{ overflow: "auto", height: "550px", display: "flex", flexDirection: "column" }}>
                                    {(activitesOfGroup.data !== undefined) && activitesOfGroup.data.results
                                        .map((activite) =>
                                            <Card key={activite.id} >

                                                <ButtonX onClick={() => {
                                                    setIdActivite(activite.id)
                                                    deleteActivity(activite.id)
                                                }}><FiX /></ButtonX>
                                                <div onClick={() => {
                                                    setIdActivite(activite.id)
                                                    showModalEditActivite()
                                                }}>
                                                    <TextCard>{activite.title}</TextCard>
                                                    <TextCard>{activite.realization_time}</TextCard>
                                                </div>
                                            </Card>
                                        )}
                                </div>
                                <Button onClick={showModalCreateActivite}>Criar Atividades</Button>
                            </Container >
                            : showCreateActivite ?
                                <Container width={"440px"} height={"700px"} >
                                    <ButtonX onClick={showModalListActivites}><FiX /></ButtonX>
                                    <h3>Criar Atividade</h3>
                                    <form onSubmit={handleSubmit(onCreateActives)}>
                                        <Card width={"295px"} height={"75px"}>
                                            <Input {...register("title")} placeholder="Descrição" width={"100%"} height={"100%"} />
                                        </Card>
                                        <Card width={"295px"} height={"75px"}>
                                            <Input {...register("time")} placeholder="dd-mm-aaaa" width={"100%"} height={"100%"} />
                                        </Card>
                                        <Button width={"235px"} height={"75px"} type="submit">Criar</Button>
                                    </form>
                                </Container>
                                :
                                <Container width={"440px"} height={"700px"} >
                                    <ButtonX onClick={showModalListActivites}><FiX /></ButtonX>
                                    <h3>Editar Atividade</h3>
                                    <form onSubmit={handleSubmit(onEditActivite)}>
                                        <Card width={"295px"} height={"75px"}>
                                            <Input {...register("title")} placeholder="Descrição" width={"100%"} height={"100%"} />
                                        </Card>
                                        <Card width={"295px"} height={"75px"}>
                                            <Input {...register("time")} placeholder="dd-mm-aaaa" width={"100%"} height={"100%"} />
                                        </Card>
                                        <Button width={"235px"} height={"75px"} type="submit">Editar</Button>
                                    </form>
                                </Container>
                        }
                    </>
                }
                {
                    showDescriptionGroup ?
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
                            <Button width={"250px"} height={"50px"} onClick={() => setShowDescriptionGroup(false)} >Editar Grupo</Button>
                        </Container>
                        :
                        <Container width={"440px"} height={"700px"}>
                            <ButtonX onClick={() => setShowDescriptionGroup(true)}><FiX /></ButtonX>
                            <h2>Editar Grupo</h2>
                            <form onSubmit={handleSubmit(onUpdateGroup)}>
                                <Card width={"295px"} height={"75px"}>
                                    <Input {...register("name")} placeholder="Nome" width={"100%"} height={"100%"} />
                                </Card>
                                <Card width={"295px"} height={"75px"}>
                                    <Input {...register("description")} placeholder="Descrição" width={"100%"} height={"100%"} />
                                </Card>
                                <Card width={"295px"} height={"75px"}>
                                    <Input {...register("category")} placeholder="Categoria" width={"100%"} height={"100%"} />
                                </Card>
                                <Button width={"235px"} height={"75px"} type="submit">Editar Grupo</Button>
                            </form>

                        </Container>
                }
                {
                    showObjects &&
                    <>
                        {showListGoals ?
                            <Container width={"440px"} height={"700px"}>
                                <ButtonX onClick={handleShowObjects}><FiX /></ButtonX>
                                <h3>Objetivos</h3>
                                <div style={{ overflow: "auto", height: "550px", display: "flex", flexDirection: "column" }}>
                                    {(goalsGroup.data !== undefined) && goalsGroup.data.results
                                        .map((goal, index) =>
                                            <Card key={index} >
                                                <ButtonX onClick={() => {
                                                    setIdGoal(goal.id)
                                                    return deleteGoal(goal.id)
                                                }}><FiX /></ButtonX>
                                                <div onClick={() => {
                                                    setIdGoal(goal.id)
                                                    return showModalEditGoal()
                                                }}>
                                                    <TextCard>{goal.title}</TextCard>
                                                    <TextCard>{goal.difficulty}</TextCard>
                                                    <TextCard>{goal.how_much_achieved}</TextCard>
                                                </div>
                                            </Card>
                                        )}
                                </div>
                                <Button onClick={showModalCreateGoal}>Criar Objetivos</Button>
                            </Container>
                            : showCreateGoal ?
                                <Container width={"440px"} height={"700px"} >
                                    <ButtonX onClick={showModalListGoal}><FiX /></ButtonX>
                                    <h3>Criar Objetivos</h3>
                                    <form onSubmit={handleSubmit(onCreateGoal)}>
                                        <Card width={"295px"} height={"75px"}>
                                            <Input {...register("title")} placeholder="Descrição" width={"100%"} height={"100%"} />
                                        </Card>
                                        <Card width={"295px"} height={"75px"}>
                                            <Input {...register("difficulty")} placeholder="dificuldade" width={"100%"} height={"100%"} />
                                        </Card>
                                        <Card width={"295px"} height={"75px"}>
                                            <Input {...register("how_much_achieved")} placeholder="Quantidade" width={"100%"} height={"100%"} />
                                        </Card>
                                        <Button width={"235px"} height={"75px"} type="submit">Criar</Button>
                                    </form>
                                </Container>
                                :
                                <Container width={"440px"} height={"700px"}>
                                    <ButtonX onClick={showModalListGoal}><FiX /></ButtonX>
                                    <h3>EditarObjetivos</h3>
                                    <form onSubmit={handleSubmit(onUpdateGoal)}>
                                        <Card width={"295px"} height={"75px"}>
                                            <Input {...register("title")} placeholder="Descrição" width={"100%"} height={"100%"} />
                                        </Card>
                                        <Card width={"295px"} height={"75px"}>
                                            <Input {...register("difficulty")} placeholder="dificuldade" width={"100%"} height={"100%"} />
                                        </Card>
                                        <Card width={"295px"} height={"75px"}>
                                            <Input {...register("how_much_achieved")} placeholder="Quantidade" width={"100%"} height={"100%"} />
                                        </Card>
                                        <label form="alcançada" style={{ display: "flex", alignItems: "center" }}>
                                            <p>Alcançada:</p>
                                            <Input type="checkbox" value={true} {...register("achieved")} id="alcançada" />
                                        </label>
                                        <Button width={"235px"} height={"75px"} type="submit">Editar</Button>
                                    </form>
                                </Container>
                        }
                    </>
                }
            </Content >
        </Box >
    )
}

export default ModalGroup
