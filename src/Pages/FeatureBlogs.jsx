import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DataTable from "react-data-table-component";
import axios from "axios";

const FeatureBlogs = () => {
  const { user } = useContext(AuthContext);
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetchWishList();
  }, []);

  const fetchWishList = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_CALL}all-blogs-table`
      );

      setFeature(data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(feature);

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
        name: "Top 10",
        cell: (row, index) => index + 1,
    },
    {
      name: "Title",
      selector: (row) => row.title, 
      sortable: true, 
    },
    {
      name: "Author",
      selector: (row) => row.userName,
    },
    {
        name: "Image",
        cell: (row)=>(
            <img src={row.imageUrl} alt="" className="w-16 h-16 rounded-xl" />
        )
    },
  ];

  return (
    <div className="py-10 w-10/12 mx-auto">
      <h1 className="text-2xl font-bold mb-6">Top 10 Feature List</h1>
      <DataTable columns={columns} data={feature} customStyles={customStyles} />
    </div>
  );
};

export default FeatureBlogs;
