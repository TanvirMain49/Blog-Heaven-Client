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
import UpdateBLog from "../Pages/UpdateBLog";
import PrivetRoutes from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
            element:<PrivetRoutes>
                <AddBlogs></AddBlogs>
            </PrivetRoutes>
        },
        {
            path:'/featured-blogs',
            element:<FeatureBlogs></FeatureBlogs>
        },
        {
            path:'/my-wishlist',
            element:<PrivetRoutes>
                <WishList></WishList>
            </PrivetRoutes>
        },
        {
            path:'/all-Blogs/:id',
            element:<PrivetRoutes>
                <BlogDetails></BlogDetails>
            </PrivetRoutes>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_API_CALL}all-blogs/${params.id}`)
        },
        {
            path:'/update-Blogs/:id',
            element:<UpdateBLog></UpdateBLog>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_API_CALL}all-blogs/${params.id}`)
        },
      ]
    },
  ]);

export default router;