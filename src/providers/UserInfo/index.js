import { createContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react/cjs/react.development";

export const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [habitsList, setHabitsList] = useState([]);

  const editUser = (user, userFunction) => {
    const id = JSON.parse(localStorage.getItem("@KAF_userId"));
    const token = JSON.parse(localStorage.getItem("@KAF_userToken"));

    axios
      .patch(`https://kenzie-habits.herokuapp.com/users/${id}/`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        userFunction(resp.data.username);
      })
      .catch((err) => {
        console.log(err);
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
      .then((response) => {
        document.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const deleteHabit = (id) => {
    const token = JSON.parse(localStorage.getItem("@KAF_userToken"));
    axios
      .delete(`https://kenzie-habits.herokuapp.com/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => document.location.reload())
      .catch((err) => console.log(err));
  };

  const editHabit = (id, habit) => {
    const token = JSON.parse(localStorage.getItem("@KAF_userToken"));
    axios
      .patch(`https://kenzie-habits.herokuapp.com/habits/${id}/`, habit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((rsp) => document.location.reload())
      .catch((err) => console.log(err));
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
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
