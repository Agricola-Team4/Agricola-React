import { createContext, useContext, useState } from 'react';

export const BackgroundContext = createContext();
export function BackgroundContextProvider({ children }) {
  const [isAnimal, setIsAnimal] = useState({
    visible: false,
    name: '',
    num: '',
    img: '',
  });

  const [fencePosition1, setFencePosition1] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,
    35: false,
    36: false,
    37: false,
    38: false,
  });

  const [fencePosition2, setFencePosition2] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,
    35: false,
    36: false,
    37: false,
    38: false,
  });

  return (
    <BackgroundContext.Provider
      value={{
        isAnimal,
        setIsAnimal,
        fencePosition1,
        setFencePosition1,
        fencePosition2,
        setFencePosition2,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundContext() {
  return useContext(BackgroundContext);
}
