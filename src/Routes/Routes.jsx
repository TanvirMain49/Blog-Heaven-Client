import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Home from "../Layout/Home";
import AddBlogs from "../Pages/AddBlogs";
import AllBlogs from "../Pages/AllBlogs";
import FeatureBlogs from "../Pages/FeatureBlogs";
import WishList from "../Pages/WishList";

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
            path:'/allBlogs',
            element:<AllBlogs></AllBlogs>,
        },
        {
            path:'/addBlogs',
            element:<AddBlogs></AddBlogs>
        },
        {
            path:'/featured-blogs',
            element:<FeatureBlogs></FeatureBlogs>
        },
        {
            path:'/my-wishlist',
            element:<WishList></WishList>
        },
      ]
    },
  ]);

export default router;