import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import { AuthContextProvider } from './context/AuthContext';
import DragTest from './components/DragTest';
import { BackgroundContextProvider } from './context/BackgroundContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WebSocketProvider } from './context/WebSocketContext';
import { IsActiveContextProvider } from './context/IsActiveContext';
import { OpenCardProvider } from './context/OpenCardContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>에러</div>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dragTest',
    element: <DragTest />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BackgroundContextProvider>
          {/* <IsActiveContextProvider> */}
          {/* <OpenCardProvider> */}
          <WebSocketProvider>
            <RouterProvider router={router} />
          </WebSocketProvider>
          {/* </OpenCardProvider> */}
          {/* </IsActiveContextProvider> */}
        </BackgroundContextProvider>
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
