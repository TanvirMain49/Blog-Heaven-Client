import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

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
          title: "log in Done successfully",
          icon: "success",
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
          title: "Registration Done successfully",
          icon: "success",
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
    <div className="">
      <div className="card w-full mx-auto">
        <form onSubmit={handleLogIn} className="card-body dark:text-white">
          <h1 className="text-2xl font-bold md:pt-16 pb-4 text-center dark:text-white">
            Log in Here!
          </h1>
          <div className="form-control space-y-3">
            <input
              type="email"
              placeholder="email"
              name="email"
              className="border-y-2 px-3 py-3 my-3"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="password"
              name="password"
              className="border-y-2 px-3 py-3 mb-3"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3 space-y-4">
            <button className="btn bg-[#FF204E] border-none font-bold text-white">
              Login
            </button>
            <p className="text-bold text-center">
              Don't have an account?
              <Link
                to="/register"
                className="text-[#FF204E] cursor-pointer hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogle}
            className="btn border-none bg-[#FF204E] font-bold text-white md:mb-0 mb-4"
          >
            <FaGoogle />
            Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
