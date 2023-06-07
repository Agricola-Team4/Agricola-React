import { createContext, useContext, useState } from "react";

export const BackgroundContext = createContext();
export function BackgroundContextProvider({ children }) {
  const [isAnimal, setIsAnimal] = useState({
    visible: false,
    name: "",
    num: "",
    img: "",
  });

  return (
    <BackgroundContext.Provider value={{ isAnimal, setIsAnimal }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundContext() {
  return useContext(BackgroundContext);
}
