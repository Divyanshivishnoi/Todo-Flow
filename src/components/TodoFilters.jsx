import React from 'react';

const TodoFilters = ({ setFilter }) => {
  return (
    <div className="flex flex-col items-center gap-6 mt-6">
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
          All
        </button>
        <button className="px-6 py-2 bg-blue-200 hover:bg-blue-300 text-blue-800 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Active
        </button>
        <button className="px-6 py-2 bg-green-200 hover:bg-green-300 text-green-800 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500">
          Completed
        </button>
      </div>

      <h2 className="text-lg text-gray-700">Filters by Colors</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-2 focus:ring-purple-500" />
          <label className="text-purple-800">Purple</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="h-4 w-4 text-red-600 focus:ring-2 focus:ring-red-500" />
          <label className="text-red-800">Red</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="h-4 w-4 text-green-600 focus:ring-2 focus:ring-green-500" />
          <label className="text-green-800">Green</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-500" />
          <label className="text-blue-800">Blue</label>
        </div>
      </div>
    </div>
  );
};

export default TodoFilters;
