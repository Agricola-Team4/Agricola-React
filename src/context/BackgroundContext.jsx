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

  const [roundArray, setRoundArray] = useState([
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [round, setRound] = useState(5);

  const [prompt, setPrompt] = useState({ message: '', buttons: [] });

  const [selectedPosArr, setSelectedPosArr] = useState([]); //Farmboard arr

  const [fencePosArr, setFencePosArr] = useState([]);

  // 0 : default
  // 1 : 울타리
  // 2 : 농지
  // 3 : 농장확장
  // 23 : 기본 가족 늘리기
  // 21 : 집개조
  const [condition, setCondition] = useState(0);

  const [isMcActive, setIsMcActive] = useState(false);
  const [isScActive, setIsScActive] = useState(false);
  const [isJcActive, setIsJcActive] = useState(false);

  const initCardActive = () => {
    setIsMcActive(false);
    setIsScActive(false);
    setIsJcActive(false);
  };

  const getSelectedPosArr = () => {
    console.log(selectedPosArr);
    return selectedPosArr;
  };

  const [validLandArr, setValidLandArr] = useState([]);
  const [validRoomArr, setValidRoomArr] = useState([]);
  const [validStableArr, setValidStableArr] = useState([]);
  // Card 관련
  const [isMajorOpen, setIsMajorOpen] = useState(false);
  const [isP1HaveOpen, setIsP1HaveOpen] = useState(false);
  const [isP1ActOpen, setIsP1ActOpen] = useState(false);
  const [isP2HaveOpen, setIsP2HaveOpen] = useState(false);
  const [isP2ActOpen, setIsP2ActOpen] = useState(false);

  const [isEnd, setIsEnd] = useState(false);

  const openRoundCard = () => {
    if (round < 14) {
      setRoundArray(prev => {
        const arr = [...prev];
        arr[round] = true;
        return arr;
      });
      setRound(prev => prev + 1);
    }
  };

  const openMajorSlot = () => {
    setIsMajorOpen(true);
    setIsP1HaveOpen(false);
    setIsP1ActOpen(false);
    setIsP2HaveOpen(false);
    setIsP2ActOpen(false);
  };
  const closeMajorSlot = () => {
    setIsMajorOpen(false);
    setIsP1HaveOpen(false);
    setIsP1ActOpen(false);
    setIsP2HaveOpen(false);
    setIsP2ActOpen(false);
  };

  const openP1HaveSlot = () => {
    setIsMajorOpen(false);
    setIsP1HaveOpen(true);
    setIsP1ActOpen(false);
    setIsP2HaveOpen(false);
    setIsP2ActOpen(false);
  };
  const closeP1HaveSlot = () => {
    setIsMajorOpen(false);
    setIsP1HaveOpen(false);
    setIsP1ActOpen(false);
    setIsP2HaveOpen(false);
    setIsP2ActOpen(false);
  };

  const openP1ActSlot = () => {
    setIsMajorOpen(false);
    setIsP1HaveOpen(false);
    setIsP1ActOpen(true);
    setIsP2HaveOpen(false);
    setIsP2ActOpen(false);
  };
  const closeP1ActSlot = () => {
    setIsMajorOpen(false);
    setIsP1HaveOpen(false);
    setIsP1ActOpen(false);
    setIsP2HaveOpen(false);
    setIsP2ActOpen(false);
  };

  const openP2HaveSlot = () => {
    setIsMajorOpen(false);
    setIsP1HaveOpen(false);
    setIsP1ActOpen(false);
    setIsP2HaveOpen(true);
    setIsP2ActOpen(false);
  };
  const closeP2HaveSlot = () => {
    setIsMajorOpen(false);
    setIsP1HaveOpen(false);
    setIsP1ActOpen(false);
    setIsP2HaveOpen(false);
    setIsP2ActOpen(false);
  };

  const openP2ActSlot = () => {
    setIsMajorOpen(false);
    setIsP1HaveOpen(false);
    setIsP1ActOpen(false);
    setIsP2HaveOpen(false);
    setIsP2ActOpen(true);
  };
  const closeP2ActSlot = () => {
    setIsMajorOpen(false);
    setIsP1HaveOpen(false);
    setIsP1ActOpen(false);
    setIsP2HaveOpen(false);
    setIsP2ActOpen(false);
  };

  return (
    <BackgroundContext.Provider
      value={{
        isAnimal,
        setIsAnimal,
        fencePosition1,
        setFencePosition1,
        fencePosition2,
        setFencePosition2,
        prompt,
        setPrompt,
        selectedPosArr,
        setSelectedPosArr,
        getSelectedPosArr,
        isMajorOpen,
        setIsMajorOpen,
        isP1HaveOpen,
        setIsP1HaveOpen,
        isP1ActOpen,
        setIsP1ActOpen,
        isP2HaveOpen,
        setIsP2HaveOpen,
        isP2ActOpen,
        setIsP2ActOpen,
        openMajorSlot,
        closeMajorSlot,
        openP1HaveSlot,
        closeP1HaveSlot,
        openP1ActSlot,
        closeP1ActSlot,
        openP2HaveSlot,
        closeP2HaveSlot,
        openP2ActSlot,
        closeP2ActSlot,
        condition,
        setCondition,
        validLandArr,
        setValidLandArr,
        roundArray,
        setRoundArray,
        openRoundCard,
        validRoomArr,
        setValidRoomArr,
        validStableArr,
        setValidStableArr,
        isMcActive,
        setIsMcActive,
        isScActive,
        setIsScActive,
        isJcActive,
        setIsJcActive,
        initCardActive,
        isEnd,
        setIsEnd,
        fencePosArr,
        setFencePosArr,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundContext() {
  return useContext(BackgroundContext);
}
