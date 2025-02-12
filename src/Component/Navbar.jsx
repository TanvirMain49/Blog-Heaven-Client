import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import logo from '../assets/logopng.png'
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, signOutUser, dark, setDark } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDark = ()=>{
    setDark(!dark)
  }
  console.log(dark)

  const handleSingOut = () =>{
    signOutUser();
    Swal.fire({
      title: "log out successfully",
      icon: "success",
    });
    navigate("/login");
  }
  return (
    <div className="navbar bg-while/70 backdrop-blur-lg shadow-lg mb-7 pt-4 border-b-4 border-blue-400 rounded-2x">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allBlogs">All Blogs</NavLink>
          {user && <NavLink to="/addBlogs">Add Blogs</NavLink>}
          <NavLink to="/featured-blogs">Top Feature</NavLink>
          {user && <NavLink to="/my-wishlist">Wish list</NavLink>}
          </ul>
        </div>
        <Link to='/' className="flex items-center text-xl">
            <img
              src={logo}
              alt=""
              className="md:w-16 w-10 md:h-16 h-10"
            />
            <h1 className="text-blue-600 font-bold md:text-lg text-base">Blog Haven</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-base">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allBlogs">All Blogs</NavLink>
          {user && <NavLink to="/addBlogs">Add Blogs</NavLink>}
          <NavLink to="/featured-blogs">Top Feature</NavLink>
          {user && <NavLink to="/my-wishlist">Wish list</NavLink>}
        </ul>
      </div>
      <div className="navbar-end items-center md:gap-2 md:ml-0 ">
      <input onClick={handleDark} type="checkbox" value="synthwave" className="toggle theme-controller" />
        {user ? (
          <>
            <div>
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="user-tooltip md:w-16 md:h-16 w-12 h-12 rounded-full border-2 border-green-500 p-1"
              />
              <Tooltip
                anchorSelect=".user-tooltip"
                place="top"
                content={user?.displayName}
              />
            </div>
            <button
              onClick={handleSingOut}
              className="btn bg-blue-500 text-white border-none whitespace-nowrap md:ml-0 ml-3"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-blue-500 text-white border-none"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="btn bg-blue-500 text-white border-none pt-4 md:block hidden"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
