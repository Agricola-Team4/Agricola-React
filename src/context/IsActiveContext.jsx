import { createContext, useContext, useState } from 'react';

export const IsActiveContext = createContext();

export function IsActiveContextProvider({ childern }) {
  const [isActionBoardActive, setIsActionBoardActive] = useState(true);
  const [isFarmBoardActive, setIsFarmBoardActive] = useState(false);
  const [isCardSlotActive, setIsCardSlotActive] = useState(false);

  const [isMainCardActive, setIsMainCardActive] = useState(false);
  const [isSubCardActive, setIsSubCardActive] = useState(false);
  const [isJobCardActive, setIsJobCardActive] = useState(false);

  const activateActionBoard = () => {
    setIsActionBoardActive(true);
    setIsFarmBoardActive(false);
    setIsCardSlotActive(false);
  };

  const activateFarmBoard = () => {
    setIsActionBoardActive(false);
    setIsFarmBoardActive(true);
    setIsCardSlotActive(false);
  };

  const activateCardSlot = (type) => {
    setIsActionBoardActive(false);
    setIsFarmBoardActive(false);
    setIsCardSlotActive(true);
    switch (type) {
      case 'main':
        setIsMainCardActive(true);
        break;
      case 'sub':
        setIsSubCardActive(true);
        break;
      case 'job':
        setIsJobCardActive(true);
        break;
      default:
        throw new Error('card type이 잘못되었음');
    }
  };

  const initCardActive = () => {
    setIsMainCardActive(false);
    setIsSubCardActive(false);
    setIsJobCardActive(false);
  };

  // card 컴포넌트에 handleClickPossible context로 빼기
  const isCardClickPossible = (id) => {
    if (0 < id && id <= 14) return isJobCardActive;
    else if (14 < id && id <= 28) return isSubCardActive;
    else return isMainCardActive;
  };

  return (
    <IsActiveContext.Provider
      value={{
        isActionBoardActive,
        isFarmBoardActive,
        isCardSlotActive,
        activateFarmBoard,
        activateActionBoard,
        activateCardSlot,
        initCardActive,
        isCardClickPossible,
      }}
    >
      {childern}
    </IsActiveContext.Provider>
  );
}

export function useIsActiveContext() {
  return useContext(IsActiveContext);
}
