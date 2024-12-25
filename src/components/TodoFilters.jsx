import React from "react";

const TodoFilters = ({ setFilter, toggleColorFilter }) => {
  return (
    <div className="flex flex-col items-center gap-6 mt-6">
      <div className="flex space-x-4">
        <button
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="px-6 py-2 bg-blue-200 hover:bg-blue-300 text-blue-800 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className="px-6 py-2 bg-green-200 hover:bg-green-300 text-green-800 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <h2 className="text-lg text-gray-700">Filters by Colors</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {["Purple", "Red", "Green", "Blue"].map((color) => (
          <div key={color} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className={`h-4 w-4 text-${color.toLowerCase()}-600 focus:ring-2 focus:ring-${color.toLowerCase()}-500`}
              onChange={() => toggleColorFilter(color)}
            />
            <label className={`text-${color.toLowerCase()}-800`}>{color}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoFilters;
