import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Home from "../Layout/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
            path:'/Register',
            element:<Register></Register>
        },
      ]
    },
  ]);

export default router;