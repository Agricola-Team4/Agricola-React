import { createContext, useContext, useState } from 'react';

export const OpenCardContext = createContext();

export function OpenCardProvider({ children }) {
  const [isMajorCardSlotOpen, setIsMajorCardSlotOpen] = useState(false);
  const [isP1HaveCardSlotOpen, setIsP1HaveCardSlotOpen] = useState(false);
  const [isP1ActivatedCardSlotOpen, setIsP1ActivatedCardSlotOpen] =
    useState(false);
  const [isP2HaveCardSlotOpen, setIsP2HaveCardSlotOpen] = useState(false);
  const [isP2ActivatedCardSlotOpen, setIsP2ActivatedCardSlotOpen] =
    useState(false);

  const openMajorCardSlot = () => {
    setIsMajorCardSlotOpen(true);
    setIsP1HaveCardSlotOpen(false);
    setIsP1ActivatedCardSlotOpen(false);
    setIsP2HaveCardSlotOpen(false);
    setIsP2ActivatedCardSlotOpen(false);
  };
  const closeMajorCardSlot = () => {
    setIsMajorCardSlotOpen(false);
    setIsP1HaveCardSlotOpen(false);
    setIsP1ActivatedCardSlotOpen(false);
    setIsP2HaveCardSlotOpen(false);
    setIsP2ActivatedCardSlotOpen(false);
  };

  const openP1HaveCardSlot = () => {
    setIsMajorCardSlotOpen(false);
    setIsP1HaveCardSlotOpen(true);
    setIsP1ActivatedCardSlotOpen(false);
    setIsP2HaveCardSlotOpen(false);
    setIsP2ActivatedCardSlotOpen(false);
  };
  const closeP1HaveCardSlot = () => {
    setIsMajorCardSlotOpen(false);
    setIsP1HaveCardSlotOpen(false);
    setIsP1ActivatedCardSlotOpen(false);
    setIsP2HaveCardSlotOpen(false);
    setIsP2ActivatedCardSlotOpen(false);
  };

  const openP1ActivatedCardSlot = () => {
    setIsMajorCardSlotOpen(false);
    setIsP1HaveCardSlotOpen(false);
    setIsP1ActivatedCardSlotOpen(true);
    setIsP2HaveCardSlotOpen(false);
    setIsP2ActivatedCardSlotOpen(false);
  };
  const closeP1ActivatedCardSlot = () => {
    setIsMajorCardSlotOpen(false);
    setIsP1HaveCardSlotOpen(false);
    setIsP1ActivatedCardSlotOpen(false);
    setIsP2HaveCardSlotOpen(false);
    setIsP2ActivatedCardSlotOpen(false);
  };

  const openP2HaveCardSlot = () => {
    setIsMajorCardSlotOpen(false);
    setIsP1HaveCardSlotOpen(false);
    setIsP1ActivatedCardSlotOpen(false);
    setIsP2HaveCardSlotOpen(true);
    setIsP2ActivatedCardSlotOpen(false);
  };
  const closeP2HaveCardSlot = () => {
    setIsMajorCardSlotOpen(false);
    setIsP1HaveCardSlotOpen(false);
    setIsP1ActivatedCardSlotOpen(false);
    setIsP2HaveCardSlotOpen(false);
    setIsP2ActivatedCardSlotOpen(false);
  };

  const openP2ActivatedCardSlot = () => {
    setIsMajorCardSlotOpen(false);
    setIsP1HaveCardSlotOpen(false);
    setIsP1ActivatedCardSlotOpen(false);
    setIsP2HaveCardSlotOpen(false);
    setIsP2ActivatedCardSlotOpen(true);
  };
  const closeP2ActivatedCardSlot = () => {
    setIsMajorCardSlotOpen(false);
    setIsP1HaveCardSlotOpen(false);
    setIsP1ActivatedCardSlotOpen(false);
    setIsP2HaveCardSlotOpen(false);
    setIsP2ActivatedCardSlotOpen(false);
  };

  return (
    <OpenCardContext.Provider
      value={{
        isMajorCardSlotOpen,
        isP1HaveCardSlotOpen,
        isP1ActivatedCardSlotOpen,
        isP2HaveCardSlotOpen,
        isP2ActivatedCardSlotOpen,
        openMajorCardSlot,
        closeMajorCardSlot,
        openP1HaveCardSlot,
        closeP1HaveCardSlot,
        openP1ActivatedCardSlot,
        closeP1ActivatedCardSlot,
        openP2HaveCardSlot,
        closeP2HaveCardSlot,
        openP2ActivatedCardSlot,
        closeP2ActivatedCardSlot,
      }}
    >
      {children}
    </OpenCardContext.Provider>
  );
}

export function useOpenCardContext() {
  return useContext(OpenCardContext);
}
