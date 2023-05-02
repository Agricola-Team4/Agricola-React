import React from 'react';
import PromptBtn from './PromptBtn';

export default function Prompt() {
  return (
    <section className="bg-yellow-100 rounded-lg h-14 flex justify-center items-center text-sm font-semibold">
      <p className="mr-1">당신이 진행할 행동을 선택해주세요</p>
      <PromptBtn text="방 만들기" />
      <PromptBtn text="외양간 짓기" />
    </section>
  );
}
