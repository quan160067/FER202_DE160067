// src/contexts/UserContext.jsx
import { createContext, useReducer, useContext, useEffect } from "react";
import { api } from "../services/api";

const UserContext = createContext();

const initialState = { users: [], filter: "", sort: "" };

function reducer(state, action) {
  switch (action.type) {
    case "SET_USERS": return { ...state, users: action.payload };
    case "SET_FILTER": return { ...state, filter: action.payload };
    case "SET_SORT": return { ...state, sort: action.payload };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.id ? action.payload : u
        ),
      };
    default: return state;
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    api.get("/users").then((res) => dispatch({ type: "SET_USERS", payload: res.data }));
  }, []);

  const updateUser = async (user) => {
    const res = await api.put(`/users/${user.id}`, user);
    dispatch({ type: "UPDATE_USER", payload: res.data });
  };

  return (
    <UserContext.Provider value={{ ...state, dispatch, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
