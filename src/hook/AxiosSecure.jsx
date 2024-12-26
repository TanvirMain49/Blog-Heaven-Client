import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_CALL,
  withCredentials: true,
});

const UseAxios = () => {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          signOutUser()
            .then(() => {
              Swal.fire({
                title: error?.response?.data?.message,
                icon: "error",
                confirmButtonText: "Okay",
                customClass: {
                  confirmButton:
                    "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded",
                },
                buttonsStyling: false, // Disable default SweetAlert2 button styles
              });

              navigate("/login");
            })
            .catch((error) => {
            });
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};
export default UseAxios;
