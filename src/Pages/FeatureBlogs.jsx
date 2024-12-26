import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Loader from "../Component/Loader";

const FeatureBlogs = () => {
  const { loader, setLoader } = useContext(AuthContext);
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetchWishList();
  }, []);

  const fetchWishList = async () => {
    try {
      setLoader(true)
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_CALL}all-blogs-table`
      );

      setFeature(data);
      setLoader(false);
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
      cell: (row) => (
        <img src={row.imageUrl} alt="" className="w-16 h-16 rounded-xl" />
      ),
    },
  ];

  return (
    <div className="py-10 w-10/12 mx-auto">
      <div className="text-center mb-6 space-y-3">
        <h1 className="md:text-4xl text-3xl font-bold ">Top 10 Feature List</h1>
        <p className="md:text-base text-sm italic md:px-48 px-1">
          Discover the top 10 standout features of Feature that make it a
          trusted name in healthcare. From innovative treatments to cutting-edge
          technology, explore how Feature is revolutionizing wellness and care.
        </p>
        {loader && <Loader></Loader>}
      </div>
      <DataTable columns={columns} data={feature} customStyles={customStyles} />
      <div className="flex items-center justify-center my-8">
        <Link to="/" className="btn bg-blue-500 text-white mb-4">
          <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default FeatureBlogs;
