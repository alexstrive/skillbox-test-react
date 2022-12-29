import React, { useState } from "react";
import Header from "./Header";
import Aside from "./Aside";


import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ItemInfo from "./ItemInfo";

function RootComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <>
    <Header isModalOpen={isModalOpen} onModalClick={() => {
      setIsModalOpen(!isModalOpen);
    }} />
    <main style={{ display: "flex" }}>
      <Aside />
      <Outlet />
    </main>
  </>;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        path: "item/:id",
        loader: async ({ params }) => {
          const resp = await fetch(`http://localhost:3000/items/${params.id}`);
          return await resp.json();
        },
        element: <ItemInfo />
      }
    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
