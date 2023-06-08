import React from "react";

export default function PromptBtn({ key, text, onClick }) {
  return (
    <div
      key={key}
      className="px-2 py-1 mx-0.5 border-2 border-black rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  );
}
