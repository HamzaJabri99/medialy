import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = (inputs) => {
    try {
      //TODO in Server Side
      // const res=axios.post("endpoint", inputs);
      //setCurrentUser(res.data);
      setCurrentUser({
        id: 1,
        name: "jabri",
        email: "jabri.oldd@gmail.com",
        img: "https://images.pexels.com/photos/14189051/pexels-photo-14189051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
