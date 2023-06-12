import React, { createContext, useContext, useEffect, useState } from 'react';

export const WebSocketContext = createContext();

export function WebSocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket(
      'ws://3.36.7.233:3000/ws/agricola/player_1/'
    );

    newSocket.onopen = () => {
      console.log('WebSocket connection established');
    };

    newSocket.onmessage = () => {
      console.log('hello');
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
