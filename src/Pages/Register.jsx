import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import addBlogs from "../../public/register.json";
import Lottie from "react-lottie";

const Register = () => {
  const { createUser, signInWithGoogle, setUser, updatePfp } =
    useContext(AuthContext);
  const navigation = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    const user = { name, email, photoURL, password };
    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password) ||
      password.length < 6
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
      });
      return;
    }
    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        updatePfp({ displayName: name, photoURL: photoURL })
          .then((res) => {
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
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: addBlogs,
  };
  return (
    <div className="card max-w-lg border border-blue-500 md:mx-auto mx-3">
      <Lottie options={defaultOptions} height={200} width={400}></Lottie>
      <form onSubmit={handleRegister} className="card-body">
        <h1 className="text-2xl font-bold pt-3 pb-1 text-center">
          Register Here!
        </h1>
        <h1 className="text-base pb-4 text-center text-black">
          Join us now for exclusive features and updates!
        </h1>
        <div className="form-control space-y-3">
          <input
            type="text"
            placeholder="name"
            name="name"
            className="border-y-2 px-3 py-3 my-2"
            required
          />
        </div>
        <div className="form-control space-y-2">
          <input
            type="text"
            placeholder="photoURL"
            name="photoURL"
            className="border-y-2 px-3 py-3 my-2"
            required
          />
        </div>
        <div className="form-control space-y-2">
          <input
            type="email"
            placeholder="email"
            name="email"
            className="border-y-2 px-3 py-3 my-2"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="password"
            name="password"
            className="border-y-2 px-3 py-3 mb-2"
            required
          />
        </div>
        <div className="form-control mt-3 space-y-4">
          <button className="btn bg-blue-500 border-none font-bold text-white">
            Register
          </button>
          <p className="text-bold text-center">
            Do have an account?
            <Link
              to="/login"
              className="text-blue-500 cursor-pointer hover:underline ml-1"
            >
              log in here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
