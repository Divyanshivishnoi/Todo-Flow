import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoActions from "./components/TodoActions";
import TodoFilters from "./components/TodoFilters";

function App() {
  const [todos, setTodos] = useState([]); // State to store to-do items
  const [filter, setFilter] = useState("all"); // State to store filter value

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleMarkAllCompleted = () => {
    setTodos(
      todos.map((todo) => {
        return { ...todo, completed: true };
      })
    );
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const toggleCompleted = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Filtering todos 
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; 
  });


  return (
    <div className="p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200m">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Todo App
      </h1>

      {/* input */}
      <TodoInput todos={todos} setTodos={setTodos} />
      <ul className="mt-6 bg-white shadow-lg rounded-lg p-4">
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-4 p-2 border-b last:border-none"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}
              />
              <span className="text-gray-700">{todo.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <select className="border border-gray-300 rounded-lg p-1 focus:ring-2 focus:ring-blue-500">
                <option>Purple</option>
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
              </select>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                onClick={() => handleDelete(index)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>


      {/* actions */}
      <div>
        <TodoActions
          handleMarkAllCompleted={handleMarkAllCompleted}
          handleClearCompleted={handleClearCompleted}
        />
      </div>

      <br></br>
      {/* remaining todos  */}
      <h2 className="text-center text-gray-700 font-medium">
        Remaining Todos:{" "}
        <span className="font-bold text-gray-800">
          {todos.filter((todo) => !todo.completed).length}
        </span>
      </h2>

      {/* todofilters */}
      <TodoFilters setFilter={setFilter} />
    </div>
  );
}

export default App;



