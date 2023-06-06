import { useState } from "react";

export function useCardBoard() {
  const [isMajorOpen, setIsMajorOpen] = useState(false);
  const [isP1HaveOpen, setIsP1HaveOpen] = useState(false);
  const [isP1ActOpen, setIsP1ActOpen] = useState(false);
  const [isP2HaveOpen, setIsP2HaveOpen] = useState(false);
  const [isP2ActOpen, setIsP2ActOpen] = useState(false);

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
    console.log("p1 act");
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

  return {
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
  };
}
