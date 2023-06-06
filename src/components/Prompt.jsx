import React from "react";
import PromptBtn from "./PromptBtn";
import { login } from "../api/agricola";
import { useAuthContext } from "../context/AuthContext";

export default function Prompt() {
  const { pid, setPid } = useAuthContext();

  const handleLogin = async () => {
    try {
      const player_id = await login();
      console.log("로그인 성공 with ", player_id);
      setPid(player_id);
      console.log("설정된 pid값은 : ", pid);
    } catch (error) {
      console.log("로그인 에러: ", error);
    }
  };

  return (
    <section className="bg-yellow-100 rounded-lg h-14 flex justify-center items-center text-sm font-semibold">
      <p className="mr-1">당신이 진행할 행동을 선택해주세요</p>
      <PromptBtn text="방 만들기" onClick={handleLogin} />
      <PromptBtn text="외양간 짓기" />
    </section>
  );
}
