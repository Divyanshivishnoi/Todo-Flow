import React from "react";

const TodoInput = ({ todos, setTodos }) => {
  const handleAddTodo = (e) => {
    const value = e.target.value.trim();

    if (e.key === "Enter") {
      if (value) {
        setTodos((prevTodos) => [...prevTodos, { name: value, completed: false }]);
        e.target.value = ""; // Clear input field
      } else {
        console.log("Please enter a valid task.");
      }
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Add a task"
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyDown={handleAddTodo}
      />
    </div>
  );
};

export default TodoInput;







