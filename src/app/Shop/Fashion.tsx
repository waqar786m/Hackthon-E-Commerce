"use client"

import { useState } from "react";
import { RiGridFill, RiListUnordered } from "react-icons/ri";

export default function Fashion() {
  const [viewType, setViewType] = useState("grid");

  return (
    <div className="container mx-auto py-6 px-2 flex justify-around items-center">
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-indigo-900">
          Ecommerce Accesories & Fashion item
        </h1>
        <p className="text-sm text-gray-500">
          About 9,620 results (0.62 seconds)
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Per Page */}
        <div className="flex items-center">
          <label htmlFor="perPage" className="text-sm text-indigo-900 mr-2">
            Per Page:
          </label>
          <input
            type="number"
            id="perPage"
            className="w-16 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
          />
        </div>

        {/* Sort By */}
        <div className="flex items-center">
          <label htmlFor="sortBy" className="text-sm text-indigo-900 mr-2">
            Sort By:
          </label>
          <select
            id="sortBy"
            className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none text-gray-500"
          >
            <option>Best Match</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {/* View */}
        <div className="flex items-center">
          <label className="text-sm text-indigo-900 mr-2">View:</label>
          <div className="flex space-x-2">
            <button
              className={`p-2 border ${
                viewType === "grid"
                  ? "border-indigo-500 text-indigo-500"
                  : "border-gray-300 text-gray-500"
              } rounded`}
              onClick={() => setViewType("grid")}
            >
              <RiGridFill />
            </button>
            <button
              className={`p-2 border ${
                viewType === "list"
                  ? "border-indigo-500 text-indigo-500"
                  : "border-gray-300 text-gray-500"
              } rounded`}
              onClick={() => setViewType("list")}
            >    
              <RiListUnordered />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
