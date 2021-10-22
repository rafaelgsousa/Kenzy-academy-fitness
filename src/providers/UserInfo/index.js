import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [habitsList, setHabitsList] = useState([]);

  const editUser = (user) => {
    const id = JSON.parse(localStorage.getItem("@KAF_userId"));
    const token = JSON.parse(localStorage.getItem("@KAF_userToken"));

    axios
      .patch(`https://kenzie-habits.herokuapp.com/users/${id}/`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        localStorage.setItem("@KAF_userName", resp.data.username);
        document.location.reload();
      })
      .catch((_) => {
        toast.error("Username or Email already taken!");
      });
  };

  const getHabitsList = () => {
    const token = JSON.parse(localStorage.getItem("@KAF_userToken"));
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabitsList(response.data));
  };

  const createHabit = (habit) => {
    const token = JSON.parse(localStorage.getItem("@KAF_userToken"));
    axios
      .post("https://kenzie-habits.herokuapp.com/habits/", habit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        document.location.reload();
      });
  };

  const deleteHabit = (id) => {
    const token = JSON.parse(localStorage.getItem("@KAF_userToken"));
    axios
      .delete(`https://kenzie-habits.herokuapp.com/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => document.location.reload());
  };

  const editHabit = (id, habit) => {
    const token = JSON.parse(localStorage.getItem("@KAF_userToken"));
    axios
      .patch(`https://kenzie-habits.herokuapp.com/habits/${id}/`, habit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => document.location.reload());
  };

  const getUser = (setName) => {
    const id = JSON.parse(localStorage.getItem("@KAF_userId"));

    axios
      .get(`https://kenzie-habits.herokuapp.com/users/${id}/`)
      .then((rsp) => setName(rsp.data.username));
  };

  return (
    <UserInfoContext.Provider
      value={{
        editUser,
        habitsList,
        createHabit,
        deleteHabit,
        getHabitsList,
        editHabit,
        getUser,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
