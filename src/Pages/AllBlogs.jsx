import React from "react";
import Card from "../Component/Card";

const AllBlogs = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 w-10/12 mx-auto pb-8">
        <div>
          <select name="category" className="py-3 px-4 border rounded-lg" required>
            <option value="" disabled selected>
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
          <input placeholder="Search" type="text" className="py-2 px-6 rounded-l-lg border border-black"/>
          <button className="btn rounded-r-lg bg-blue-500 text-white">Search</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 w-10/12 mx-auto">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default AllBlogs;
