// import { useState } from "react";

import "./App.css";


import HomePage from "./pages/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <HomePage />
    }
  ])
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  );
}

export default App;
