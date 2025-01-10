import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxios from "../hook/AxiosSecure";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Loader from "../Component/Loader";

const WishList = () => {
  const axiosInstance = UseAxios();
  const { user, loader, setLoader } = useContext(AuthContext);
  const [wish, setWish] = useState([]);

  useEffect(() => {
    setLoader(true);
    fetchWishList();
    setLoader(false)
  }, []);

  const fetchWishList = async () => {
    try {
      const { data } = await axiosInstance.get(`wishList/${user?.email}`);
      setWish(data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(wish);

  const handleDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_CALL}wishList/${id}`);
    setWish(wish.filter((data) => data._id !== id));
    Swal.fire({
      title: "Deleted successfully",
      icon: "success",
      confirmButtonText: "Ok",
      customClass: {
        confirmButton:
          "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
      },
      buttonsStyling: false,
    });
  };

  // console.log(wish);
  // custom theme for table
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        borderBottom: "2px solid #e0e0e0",
        textAlign: "center",
        justifyContent: "center",
      },
    },
    rows: {
      style: {
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      },
    },
    cells: {
      style: {
        justifyContent: "center",
        color: "#333333",
        padding: "16px",
        fontSize: "16px",
      },
    },
  };

  const columns = [
    {
      name: "Title", // Column name for "Title"
      selector: (row) => row.title, // Data key for "Title"
      sortable: true, // Make it sortable
    },
    {
      name: "Author",
      selector: (row) => row.authorName,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => handleDelete(row._id)}
          className="btn bg-red-500 text-white"
        >
          Remove
        </button>
      ),
      ignoreRowClick: true, // Prevent row click event from triggering on button click
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="py-10 w-10/12 mx-auto">
      <div className="text-center mb-8 space-y-3">
        <h1 className="text-2xl font-bold ">Your Personalized Wish List</h1>
        <p className="text-sm italic md:px-64 px-2">
          Description: Keep track of your favorite items in one convenient
          place. Add, manage, and revisit your desired products anytime to make
          your shopping experience seamless and tailored to your needs.
        </p>
      </div>
      {loader && <Loader></Loader>}
      <DataTable columns={columns} data={wish} customStyles={customStyles} />
      <div className="flex items-center justify-center my-8">
        <Link to="/" className="btn bg-blue-500 text-white mb-4">
          <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default WishList;
