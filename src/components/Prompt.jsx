import React from "react";
import PromptBtn from "./PromptBtn";
import { login } from "../api/agricola";
import { useAuthContext } from "../context/AuthContext";
import { useBackgroundContext } from "../context/BackgroundContext";

export default function Prompt({ onPromptBtnClick }) {
  const { pid, setPid } = useAuthContext();
  const { prompt } = useBackgroundContext();
  console.log(prompt);
  return (
    <section className="bg-yellow-100 rounded-lg h-14 my-1 flex justify-center items-center text-sm font-semibold z-0">
      {/* <p className="mr-1">{prompt.message}</p> */}
      {/* <PromptBtn text={item.text} onClick=clickButton(1) /> */}
      {prompt.buttons.map((item, index) => (
        <PromptBtn key={index} text={item.text} onClick={item.onClick} />
      ))}
    </section>
  );
}
