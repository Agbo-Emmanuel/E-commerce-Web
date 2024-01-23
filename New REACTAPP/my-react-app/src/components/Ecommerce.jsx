import Category from "../Pages/Category";
import Home from "../Pages/Home"
import Cart from "../Pages/Cart"
import Layout from "./Layout"
import Detailpage from "./Detailpage";



import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [

        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/category",
            element: <Category/>
        },
        {
            path: "/cart",
            element: <Cart/>
        },
        {
          path: "/detailpage/:id",
          element : <Detailpage/>
        },
      ]
    },
    
  ]);




const Ecommerce = () => {
   
  return (
    
    <>
    
        <RouterProvider router={router} />
    
    </>
  )
}

export default Ecommerce
