import { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import toast from "react-toastify"

export const GroupsContext = createContext([])

export const GroupsProvider = ({children}) => {

    const [groupsOfCategory,setGroupsOfCategory] = useState([])

    const [especificGroup,setEspecificGroup] = useState([])

    const [subscriptions,setSubscription] = useState([])

    const history = useHistory()

    const access = localStorage.getItem("@KAF_userToken") || ""

    const createGroup = (data) =>{
        axios.post("https://kenzie-habits.herokuapp.com/groups/", data,
        {
            headers: {
                Authorization: `Bearer ${access}`,
                },
        }
        )
        .then((_)=>{
            toast.sucess("created group!")
            history.push("/dashboard")
        })
        .catch(toast.error("failed creation!"))
    }

    const deleteGroup = (id) => {
        axios.delete(`https://kenzie-habits.herokuapp.com/groups/${id}/unsubscribe/`,
        {
            headers: {
                Authorization: `Bearer ${access}`,
                },
        }
        )
        .then((_)=>{
            toast.sucess("deleted group!")
            history.push("/dashboard")
        })
        .catch(toast.error("failed to delete!"))
    }

    const EditGroup = ({name,description,category},idGroup)=>{

        axios.patch(`https://kenzie-habits.herokuapp.com/groups/${idGroup}/`,
        {name,description,category},
        {
            headers: {
                Authorization: `Bearer ${access}`,
                },
        }
        )
        .then((_)=>{
            toast.sucess("Editing completed!")
            history.push("/dashboard")
        })
        .catch(toast.error("failed in editing!"))
    }

    const getGroupsForCategory = (category)=>{
        axios.get(`https://kenzie-habits.herokuapp.com/groups/?category=${category}`)
        .then(resp=>{
            setGroupsOfCategory(resp)
        })
        .catch((err)=>toast.error("search failure!"))
    }

    const getEspecificGroup = (idGroup) => {
        axios.get(`https://kenzie-habits.herokuapp.com/groups/${idGroup}/`)
        .then(resp=>setEspecificGroup(resp))
        .catch((err)=>toast.error("search failure!"))
    }

    const getSubscription = () => {
        axios.get("https://kenzie-habits.herokuapp.com/groups/subscriptions/",
        {
            headers: {
                Authorization: `Bearer ${access}`,
                },
        }
        )
        .then(resp=>setSubscription(resp))
        .catch(err=>toast.erro("search failure!"))

    }

    const subscribToAGroup = (idGroup) => {
        axios.post(`https://kenzie-habits.herokuapp.com/groups/${idGroup}/subscribe/`,
        {
            headers: {
                Authorization: `Bearer ${access}`,
                },
        }
        )
        .then((_)=>{
            toast.sucess("Successfully enrolled")
            history.push("/dashboard")
        })
        .catch(err=>toast.error("registration error!"))
    }

    return (
        <GroupsContext.Provider value={
        {groupsOfCategory,especificGroup,subscriptions,createGroup,deleteGroup,EditGroup,
            getGroupsForCategory,getEspecificGroup,getSubscription,subscribToAGroup}}>
            {children}
        </GroupsContext.Provider>
    )
}