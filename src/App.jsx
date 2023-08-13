import React from 'react'
import Dash from './pages/dashboard/Dash'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tran from './pages/transaction/Tran';
import Support from './pages/support/Support';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dash />,
  },
  {
    path: "/transactions",
    element: <Tran />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);
const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App