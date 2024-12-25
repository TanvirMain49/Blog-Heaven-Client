import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 mb-7">
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
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link className="flex items-center text-xl">
            <img
              src="https://img.freepik.com/premium-vector/camera-vector-illustration-icon-photo-sign-graphic-photography-design-flash-film-digital_1013341-33000.jpg"
              alt=""
              className="w-16 h-16"
            />
            <h1 className="text-black font-bold">Grand Blog</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-base">
          <Link to="/">Home</Link>
          <Link to="/allBlogs">All Blogs</Link>
          {user && <Link to="/addBlogs">Add Blogs</Link>}
          <Link to="/featured-blogs">Top Feature</Link>
          {user && <Link to="/my-wishlist">Wish list</Link>}
        </ul>
      </div>
      <div className="navbar-end items-center md:gap-2 md:ml-0 ">
        {user ? (
          <>
            <div>
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="user-tooltip md:w-16 md:h-16 w-14 h-14 rounded-full border-2 border-green-500 p-1"
              />
              <Tooltip
                anchorSelect=".user-tooltip"
                place="top"
                content={user?.displayName}
              />
            </div>
            <button
              onClick={signOutUser}
              className="btn bg-blue-500 text-white border-none whitespace-nowrap"
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
            <NavLink
              to="/register"
              className="btn bg-blue-500 text-white border-none pt-4 md:block hidden"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
