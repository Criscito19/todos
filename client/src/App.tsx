import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import React from "react";


function App(): JSX.Element {
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children :[
      {
        path:'/', 
        element: <MainPage />
      }
    ]
  }
])

  return <RouterProvider router={router} />
}

export default App;
