import { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

export const GroupsContext = createContext()

export const GroupsProvider = ({ children }) => {

    const [groupsOfCategory, setGroupsOfCategory] = useState([])

    const [especificGroup, setEspecificGroup] = useState([])

    const [subscriptions, setSubscription] = useState([])

    const history = useHistory()

    const access = JSON.parse(localStorage.getItem("@KAF_userToken")) || ""

    const createGroup = (data) => {
        axios.post("https://kenzie-habits.herokuapp.com/groups/", data,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then((_) =>
                toast.success("created group!")
            )
            .catch((_) => toast.error("failed creation!"))
    }

    const deleteGroup = (id) => {
        axios.delete(`https://kenzie-habits.herokuapp.com/groups/${id}/unsubscribe/`,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then((_) => {
                toast.success("deleted group!")
            })
            .catch((_) => toast.error("failed to delete!"))
    }

    const updateGroup = (data, idGroup) => {

        axios.patch(`https://kenzie-habits.herokuapp.com/groups/${idGroup}/`, data,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then((_) => {
                toast.success("Editing completed!")
                history.push("/groups")
            })
            .catch((_) => toast.error("failed in editing!"))
    }

    const getGroupsForCategory = (category) => {
        axios.get(`https://kenzie-habits.herokuapp.com/groups/${category}`)
            .then(resp => {
                return setGroupsOfCategory(resp)
            })
            .catch((_) => console.log)
    }

    const getEspecificGroup = (idGroup) => {
        axios.get(`https://kenzie-habits.herokuapp.com/groups/${idGroup}/`)
            .then(resp => setEspecificGroup(resp))
            .catch((_) => console.log)
    }

    const getSubscription = () => {
        axios.get("https://kenzie-habits.herokuapp.com/groups/subscriptions/",
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then(resp => {
                return setSubscription(resp)
            })
            .catch((_) => console.log)

    }

    const subscribToAGroup = (idGroup) => {

        axios.post(`https://kenzie-habits.herokuapp.com/groups/${idGroup}/subscribe/`,
            {
                headers: {
                    null: '',
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then((_) => {
                toast.success("Successfully enrolled")
                return history.push("/groups")
            })
            .catch((_) => toast.error("registration error!"))
    }

    return (
        <GroupsContext.Provider value={
            {
                access, groupsOfCategory, especificGroup, subscriptions, createGroup, deleteGroup, updateGroup,
                getGroupsForCategory, getEspecificGroup, getSubscription, subscribToAGroup
            }}>
            {children}
        </GroupsContext.Provider>
    )
}