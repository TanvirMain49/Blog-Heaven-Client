import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Home from "../Layout/Home";
import AddBlogs from "../Pages/AddBlogs";

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
        {
            path:'/addBlogs',
            element:<AddBlogs></AddBlogs>
        },
      ]
    },
  ]);

export default router;