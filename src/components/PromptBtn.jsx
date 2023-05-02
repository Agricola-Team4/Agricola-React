import React from 'react';

export default function PromptBtn({ text }) {
  return (
    <div className="px-2 py-1 mx-0.5 border-2 border-black rounded-lg cursor-pointer">
      {text}
    </div>
  );
}
