import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Sale from "./pages/Sale";
import Branches from "./pages/Branches";
import Kids from "./pages/Kids";
import Productview from "./components/Productview";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "men/:id",
        element: <Productview />,
      },
      {
        path: "sale/:id",
        element: <Productview />,
      },
      {
        path: "kids",
        element: <Kids />,
      },
      {
        path: "sale",
        element: <Sale />,
      },
      {
        path: "branches",
        element: <Branches />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      { path: "/order/:name",
       element: <Order />
       },
       {path:"/*",
       element:<div className="mt-8 text-xl min-h-[75vh]">Comming Soon</div>
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
