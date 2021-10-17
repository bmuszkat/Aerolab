import { createContext, useState } from "react";
import { api } from "../../api/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [points, setPoints] = useState("");

  const getUser = async () => {
    try {
      const { data } = await api.get("/user/me");
      setUser(data);
    } catch (error) {
      console.log(error?.response);
    }
  };

  const addPoints = async (amount) => {
    try {
      await api.post("/user/points", { amount: amount });
    } catch (error) {
      console.log(error?.response);
    }
  };

  const handleRedeem = async (productId, productCost, quantity) => {
    //Aca hago un for por la cantidad de productos a canjear, pero lo ideal seria que pueda enviarlo como parametro
    for(let i = 0; i < quantity; i++){
      try {
        await api.post("/redeem", { productId: productId });
        setPoints(points - productCost);
      } catch (error) {
        console.log(error?.response);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        getUser,
        user,
        addPoints,
        points,
        handleRedeem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
