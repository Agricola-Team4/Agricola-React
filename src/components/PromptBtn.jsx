import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

export default function PromptBtn({ text }) {
  const queryClient = useQueryClient();

  const updateWood = () => {
    axios.patch('http://localhost:3001/resource/1', { wood: 10 });
  };

  const mutation = useMutation(() => updateWood(), {
    onSuccess: () => queryClient.invalidateQueries(['resource']), // queryKey 유효성 제거
  });

  return (
    <div
      className="px-2 py-1 mx-0.5 border-2 border-black rounded-lg cursor-pointer"
      onClick={() => mutation.mutate()}
    >
      {text}
    </div>
  );
}
