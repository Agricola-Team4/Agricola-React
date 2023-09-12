import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { setFirstPlayer } from '../api/agricola';
import { useQueryClient } from '@tanstack/react-query';
import { whoseTurn } from '../api/agricola';
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [pid, setPid] = useState(1);
  const [pid2, setPid2] = useState(1);
  const [isFbActive, setIsFbActive] = useState(false);
  const [isAbActive, setIsAbActive] = useState(true);
  const [isCsActive, setIsCsActive] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    // player 정보 가져오기 http://3.36.7.233:3000/player
//    axios
  //     .get("http://127.0.0.1:8000/player/choose_first_player")
    //   .then((res) => {
      //   console.log("첫번째 플레이어 뽑습니다", res.data);
       //});
     setFirstPlayer();
     whoseTurn();
    queryClient.invalidateQueries(['firstPlayer']);
    console.log('나는', pid);

  }, []);

  return (
    <AuthContext.Provider
      value={{
        pid,
        setPid,
        pid2,
        isFbActive,
        setIsFbActive,
        isAbActive,
        setIsAbActive,
        isCsActive,
        setIsCsActive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
