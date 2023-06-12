import { useQueryClient } from '@tanstack/react-query';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const WebSocketContext = createContext();

export function WebSocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    const newSocket = new WebSocket(
      'ws://3.36.7.233:3000/ws/agricola/player_2/'
    );

    newSocket.onopen = () => {
      console.log('WebSocket connection established');
    };

    newSocket.onmessage = res => {
      console.log(res);
      // queryClient.invalidateQueries(['actionBoard']);
      // queryClient.invalidateQueries(['farmBoard']);
      // queryClient.invalidateQueries(['resource']);
      // queryClient.invalidateQueries(['haveCardData']);
      // queryClient.invalidateQueries(['majorCardData']);
      // queryClient.invalidateQueries(['actCardData']);
      // queryClient.invalidateQueries(['firstPlayer']);
    };

    newSocket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);
  return (
    <WebSocketContext.Provider value={{ socket }}>
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocketContext() {
  return useContext(WebSocketContext);
}
