import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
<<<<<<< HEAD
  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        inputs,
        {
          withCredentials: true,
        }
      );
=======
  const login = async(inputs) => {
    try {
        const res= await axios.post('http://localhost:8800/api/auth/login',inputs,{
          withCredentials:true,
        });
>>>>>>> 5b0b78463e7846809b1554f92a5a87e21771e59f

      setCurrentUser(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
<<<<<<< HEAD
  const logout = async () => {
    try {
      const res = await axios.post("http://localhost:8800/api/auth/logout");
      localStorage.removeItem("user");
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
=======
>>>>>>> 5b0b78463e7846809b1554f92a5a87e21771e59f
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
<<<<<<< HEAD
    <AuthContext.Provider value={{ currentUser, login, logout }}>
=======
    <AuthContext.Provider value={{ currentUser, login }}>
>>>>>>> 5b0b78463e7846809b1554f92a5a87e21771e59f
      {children}
    </AuthContext.Provider>
  );
};
