import {createContext, useState} from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const GoalsContext = createContext();

export const GoalsProvider = ({children}) => {

    const [goal,setGoal] = useState("");

    const [goalsGroup,setGoalsGroup] = useState([])

    const access = localStorage.getItem("@KAF_userToken") || ""

    const createGoal = ({title,difficulty,how_much_achieved,group}) => {

        const data = {title,difficulty,how_much_achieved,group}
        axios.post("https://kenzie-habits.herokuapp.com/goals/",data,
        {
            headers: {
                Authorization: `Bearer ${access}`,
                },
        }
        )
        .then((_)=>toast.success("created goal!"))
        .catch((_)=>toast.error("Error!"))
    }

    const deleteGoal = (idGoal) => {
        axios.delete(`https://kenzie-habits.herokuapp.com/goals/${idGoal}/`,
        {
            headers: {
                Authorization: `Bearer ${access}`,
                },
        }
        )
        .then((_)=>toast.success("Delete goal with success!"))
        .catch((_)=>toast.error("Error!"))
    }

    const updateGoal = (data,idGoal) => {
        console.log("data",data)
        console.log("idGoal",idGoal)
        axios.patch(`https://kenzie-habits.herokuapp.com/goals/${idGoal}/`,
        data,
        {
            headers: {
                Authorization: `Bearer ${access}`,
                },
        }
        )
        .then((_)=>toast.success("Update with sucess!"))
        .catch((_)=>toast.error("Error!"))
    }

    const getOneGoal = (idGoal) => {
        axios.get(`https://kenzie-habits.herokuapp.com/goals/${idGoal}/`)
        .then(resp=>setGoal(resp))
        .catch(err=>toast.error("Error!"))
    }

    const getGroupGoals = (idGroup) => {
        axios.get(`https://kenzie-habits.herokuapp.com/goals/?group=${idGroup}`)
        .then(resp=>setGoalsGroup(resp))
        .catch((_)=>toast.error("Error!"))
    }

    return (
        <GoalsContext.Provider 
        value={{access,goal,goalsGroup,createGoal,deleteGoal,updateGoal,
        getOneGoal,getGroupGoals}}>
            {children}
        </GoalsContext.Provider>
    )
}