import React, { useContext, useEffect, useState } from "react";
import Card from "../Component/Card";
import axios from "axios";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Component/Loader";

const AllBlogs = () => {
  const {setLoader, loader} = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchAllBlogs = async () => {
      setLoader(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_CALL}all-blogs?filter=${filter}&search=${search}`
      );
      setLoader(false)
      setBlogs(data);
      return blogs;
    };
    fetchAllBlogs();
  }, [filter, search]);

  const handleReset = () =>{
    setFilter('');
    setSearch('');
  }

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 w-10/12 mx-auto pb-8">
      <Link to='/' className="btn bg-blue-500 text-white lg:block hidden">
        <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
        Back to Home
      </Link>
        <div>
          <select
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            name="category"
            className="py-3 px-4 border rounded-lg bg-blue-500 text-white"
            required
          >
            <option  value="" disabled selected>
              Select a category
            </option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <div className="flex">
          <input
            placeholder="Search"
            type="text"
            onChange={(e)=>{setSearch(e.target.value)}}
            value={search}
            className="py-2 px-6 rounded-l-lg border border-black"
          />
          <button  className="px-4 py-2 rounded-r-lg bg-blue-500 text-white">
            Search
          </button>
        </div>
        <div>
        <button onClick={handleReset} className="btn rounded-r-lg bg-blue-500 text-white">
        Reset
        <TfiReload className="font-bold" />
        </button>
      </div>
      </div>
      {loader && <Loader></Loader>}
      <div className="grid grid-col-1 md:grid-cols-3 gap-3 w-10/12 mx-auto">
        {blogs.map((blog) => (
          <Card key={blog._id} blog={blog}></Card>
        ))}
      </div>

    </div>
  );
};

export default AllBlogs;
