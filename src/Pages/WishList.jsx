import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DataTable  from "react-data-table-component";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxios from "../hook/AxiosSecure";

const WishList = () => {
  const axiosInstance = UseAxios()
  const {user} = useContext(AuthContext);
  const [wish, setWish] = useState([]);

  useEffect(() => {
    fetchWishList();
  }, []);

  const fetchWishList = async () => {
    try {
      const { data } = await axiosInstance.get(
        `wishList/${user?.email}`
      );
      setWish(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
      console.log(id);
      await axios.delete(`${import.meta.env.VITE_API_CALL}wishList/${id}`);
      setWish(wish.filter((data) => data._id !== id));
      Swal.fire({
        title: "Deleted successfully",
        icon: "success",
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
      <h1 className="text-2xl font-bold mb-6">Blog List</h1>
      <DataTable columns={columns} data={wish} customStyles={customStyles} />
    </div>
  );
};

export default WishList;
