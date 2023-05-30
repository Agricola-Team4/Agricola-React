import React from 'react';
import useResource from '../hooks/useResource';

export default function PromptBtn({ text }) {
  const { updateResource } = useResource();

  return (
    <div
      className="px-2 py-1 mx-0.5 border-2 border-black rounded-lg cursor-pointer"
      onClick={() => updateResource.mutate({})}
    >
      {text}
    </div>
  );
}
