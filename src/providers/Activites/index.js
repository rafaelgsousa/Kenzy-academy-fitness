import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ActivitesContext = createContext();

export const ActivitesProvider = ({ children }) => {

    const [oneActivite, setOneActivite] = useState("")

    const [activitesOfGroup, setActivitesOfGroup] = useState([])

    const access = localStorage.getItem("@KAF_userToken") || ""

    const createActivites = (data) => {

        axios.post("https://kenzie-habits.herokuapp.com/activities/", data,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then((_) => toast.success("activities created!"))
            .catch((_) => toast.error("error in creation!"))
    }

    const updateActivity = ({ title, realization_time }, idactivite) => {

        const data = { title, realization_time }

        axios.patch(`https://kenzie-habits.herokuapp.com/activities/${idactivite}/`, data,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then((_) => toast.success("sucess in update!"))
            .catch((_) => toast.error("fail!"))
    }

    const deleteActivity = (id) => {
        axios.delete(`https://kenzie-habits.herokuapp.com/activities/${id}/`,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        )
            .then((_) => toast.success("deleted!"))
            .catch((_) => toast.error("fail!"))
    }

    const getOneActivity = (id) => {
        axios.get(`https://kenzie-habits.herokuapp.com/activities/${id}/`)
            .then(resp => {
                setOneActivite(resp)
                toast.success("research success!")
            })
            .catch((_) => toast.error("search failure!"))
    }

    const getGroupActivities = (id) => {
        axios.get(`https://kenzie-habits.herokuapp.com/activities/?group=${id}`)
            .then(resp => {
                setActivitesOfGroup(resp)
            })
            .catch((_) => toast.error("fail!"))
    }

    return (
        <ActivitesContext.Provider
            value={{
                oneActivite, activitesOfGroup, createActivites, updateActivity, deleteActivity
                , getOneActivity, getGroupActivities
            }}>
            {children}
        </ActivitesContext.Provider>
    )
}