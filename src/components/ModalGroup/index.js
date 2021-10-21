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


const ModalGroup = () => {

    const params = useParams();

    const [idgroup] = useState(params.id);

    const history = useHistory()

    const { activitesOfGroup, getGroupActivities } = useContext(ActivitesContext)

    const { goalsGroup, getGroupGoals } = useContext(GoalsContext)

    const { especificGroup, getEspecificGroup, updateGroup } = useContext(GroupsContext)

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

    return (
        <Box>
            <Blur />
            <Content>
                {showActivities &&
                    <Container width={"440px"} height={"700px"}>
                        <ButtonX onClick={handleShowActivities}><FiX /></ButtonX>
                        <h3>Atividades</h3>

                        {(activitesOfGroup.data !== undefined) && activitesOfGroup.data.results
                            .map((activite) =>
                                <Card key={activite.id}>
                                    <ButtonX><FiX /></ButtonX>
                                    <TextCard>{activite.title}</TextCard>
                                    <TextCard>{activite.realization_time}</TextCard>
                                </Card>
                            )}
                        <Button>Criar Atividades</Button>
                    </Container>
                }

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
                    <Button width={"250px"} height={"50px"}>Editar Grupo</Button>
                </Container>

                {showObjects &&
                    <Container width={"440px"} height={"700px"}>
                        <ButtonX onClick={handleShowObjects}><FiX /></ButtonX>
                        <h3>Objetivos</h3>
                        {(goalsGroup.data !== undefined) && goalsGroup.data.results
                            .map((goal, index) =>
                                <Card key={index}>
                                    <ButtonX><FiX /></ButtonX>
                                    <TextCard>{goal.title}</TextCard>
                                    <TextCard>{goal.difficulty}</TextCard>
                                    <TextCard>{goal.how_much_achieved}</TextCard>
                                </Card>
                            )}
                        <Button>Criar Objetivos</Button>
                    </Container>
                }
            </Content>
        </Box>
    )
}

export default ModalGroup
