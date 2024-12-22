import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, signInWithGoogle, setUser, updatePfp } = useContext(AuthContext);
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
    console.log(user);
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
            console.log(error);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleRegister} className="card-body">
        <h1 className="text-2xl font-bold mb:pt-8 pt-3 pb-4 text-center">
          Register Here!
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
          <button className="btn bg-[#FF204E] border-none font-bold text-white">
            Register
          </button>
          <p className="text-bold text-center">
            Do have an account?
            <Link
              to="/login"
              className="text-[#FF204E] cursor-pointer hover:underline ml-1"
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
