import { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

export const GroupsContext = createContext()

export const GroupsProvider = ({ children }) => {

    const [groupsOfCategory, setGroupsOfCategory] = useState([])

    const [especificGroup, setEspecificGroup] = useState([])

    const [subscriptions, setSubscription] = useState([])

    const [showModal, setShowModal] = useState(false)

    const history = useHistory()

    const access = localStorage.getItem("@KAF_userToken") || ""

    const createGroup = (data) => {
        axios.post("https://kenzie-habits.herokuapp.com/groups/", data,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then((_) => {
                toast.success("created group!")
                history.push("/dashboard")
            })
            .catch(toast.error("failed creation!"))
    }

    const deleteGroup = (id, access) => {
        axios.delete(`https://kenzie-habits.herokuapp.com/groups/${id}/unsubscribe/`,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then((_) => {
                toast.success("deleted group!")
                history.push("/dashboard")
            })
            .catch(toast.error("failed to delete!"))
    }

    const EditGroup = ({ name, description, category }, idGroup) => {

        axios.patch(`https://kenzie-habits.herokuapp.com/groups/${idGroup}/`,
            { name, description, category },
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then((_) => {
                toast.success("Editing completed!")
                history.push("/dashboard")
            })
            .catch(toast.error("failed in editing!"))
    }

    const getGroupsForCategory = (category) => {
        axios.get(`https://kenzie-habits.herokuapp.com/groups/?category=${category}`)
            .then(resp => {
                setGroupsOfCategory(resp)
            })
            .catch((err) => toast.error("search failure!"))
    }

    const getEspecificGroup = (idGroup) => {
        axios.get(`https://kenzie-habits.herokuapp.com/groups/${idGroup}/`)
            .then(resp => setEspecificGroup(resp))
            .catch((err) => toast.error("search failure!"))
    }

    const getSubscription = () => {
        axios.get("https://kenzie-habits.herokuapp.com/groups/subscriptions/",
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then(resp => setSubscription(resp))
            .catch(err => toast.error("search failure!"))

    }

    const subscribToAGroup = (idGroup) => {
        axios.post(`https://kenzie-habits.herokuapp.com/groups/${idGroup}/subscribe/`,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then((_) => {
                toast.success("Successfully enrolled")
                history.push("/dashboard")
            })
            .catch(err => toast.error("registration error!"))
    }

    const toShowModalGroup = () => {
        setShowModal(!showModal)
    }

    return (
        <GroupsContext.Provider value={
            {
                access, groupsOfCategory, especificGroup, subscriptions, createGroup, deleteGroup, EditGroup,
                getGroupsForCategory, getEspecificGroup, getSubscription, subscribToAGroup, toShowModalGroup, showModal
            }}>
            {children}
        </GroupsContext.Provider>
    )
}