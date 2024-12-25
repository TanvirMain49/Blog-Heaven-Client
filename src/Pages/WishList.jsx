import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Link } from "react-router-dom";

const WishList = () => {
  const [wish, setWish] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    fetchWishList();
  }, []);

  const fetchWishList = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_CALL}wishList`
      );
      setWish(data);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err);
    } finally {
      setLoading(false); // Set loading to false once data is fetched or error occurs
    }
  };

  const handleDelete = (id) =>{
    console.log(id);
  }

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
        padding: '6px',
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
        <button onClick={()=>handleDelete(row.blog_id)} className="btn bg-red-500 text-white">Remove</button>
      ),
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
