import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  const { signInWithGoogle, logIn, setUser } = useContext(AuthContext);
  const navigation = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((res) => {
        setUser(res.user);
        Swal.fire({
          title: `Welcome Back`,
          icon: "success",
          confirmButtonText: "Ok",
          customClass: {
            confirmButton:
              "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
          },
          buttonsStyling: false,
        });
        navigation("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(res.user);
        Swal.fire({
          title: `Welcome Back`,
          icon: "success",
          confirmButtonText: "Ok",
          customClass: {
            confirmButton:
              "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
          },
          buttonsStyling: false,
        });
        navigation("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="card max-w-lg border mx-4 md:mx-auto text-black border-blue-500">
      <form onSubmit={handleLogIn} className="card-body dark:text-white">
        <div className="flex justify-center items-center"></div>
        <h1 className="text-2xl font-bold text-center text-black">
          Welcome Back!
        </h1>
        <h1 className="text-base pb-4 text-center text-black">
          Continue with Google or Enter your details
        </h1>
        <button
          onClick={handleGoogle}
          className="btn bg-gray-100 border border-blue-500 font-bold text-blue-500 md:mb-0 mb-4 hover:bg-gray-100"
        >
          <FcGoogle className="text-2xl" />
          Log in with Google
        </button>
        <div className="form-control space-y-3">
          <input
            type="email"
            placeholder="email"
            name="email"
            className="border-y-2 px-3 py-3 my-3 text-black"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="password"
            name="password"
            className="border-y-2 px-3 py-3 mb-3 text-black"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-3 space-y-4">
          <button className="btn bg-blue-500 hover:bg-blue-500 border-none font-bold text-white">
            Login
          </button>
          <p className="text-bold text-black text-center">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
