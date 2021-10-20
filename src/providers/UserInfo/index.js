import { createContext, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react/cjs/react.development";

export const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const id = JSON.parse(localStorage.getItem("@KAF_userId"));
  const access = JSON.parse(localStorage.getItem("@KAF_userToken"));
  const [habitsList, setHabitsList] = useState([]);

  const editUser = (user) => {
    axios
      .patch(`https://kenzie-habits.herokuapp.com/users/${id}/`, user, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((_) => {
        localStorage.setItem("@KAF_userName", user.username);
        document.location.reload();
      })
      .catch(toast.error("failed creation try another username or email!"));
  };

  const getHabitsList = () => {
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => setHabitsList(response.data));
  };

  const createHabit = (habit) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/habits/", habit, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => {
        setHabitsList([...habitsList, habit]);
        document.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const deleteHabit = (id) => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((_) => document.location.reload())
      .catch((err) => console.log(err));
  };

  useEffect(() => getHabitsList(), []);

  console.log(habitsList);

  return (
    <UserInfoContext.Provider
      value={{ editUser, habitsList, createHabit, deleteHabit }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
