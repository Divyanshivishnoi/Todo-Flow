import React from "react";

const TodoActions = ({handleMarkAllCompleted,handleClearCompleted}) => {
  return (
    <div className="flex gap-4 mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all" onClick={handleMarkAllCompleted} >
        Mark All Completed
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all" onClick={handleClearCompleted}>
        Clear Completed
      </button><br></br>
     
    </div>
  );
};

export default TodoActions;




