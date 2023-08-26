import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import CodeEditor from './pages/CodeEditor';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "codeEditor",
      element: <CodeEditor />
    }
  ]);

  return (

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

  );
}

export default App;
