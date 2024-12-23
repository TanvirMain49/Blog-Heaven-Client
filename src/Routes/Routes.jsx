import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Home from "../Layout/Home";
import AddBlogs from "../Pages/AddBlogs";
import AllBlogs from "../Pages/AllBlogs";
import FeatureBlogs from "../Pages/FeatureBlogs";
import WishList from "../Pages/WishList";
import BlogDetails from "../Pages/BlogDetails";

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
        {
            path:'/all-Blogs/:id',
            element:<BlogDetails></BlogDetails>,
            loader: ({params}) => fetch(`http://localhost:4000/all-blogs/${params.id}`)
        },
      ]
    },
  ]);

export default router;