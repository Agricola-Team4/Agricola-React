import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [pid, setPid] = useState(null);

  useEffect(() => {
    // player 정보 가져오기 http://3.36.7.233:3000/player
    axios.get("http://3.36.7.233:3000/player").then((res) => {
      console.log(res.data);
      // setPlayerId(res.data.idid);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ pid }}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
