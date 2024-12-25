import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoActions from "./components/TodoActions";
import TodoFilters from "./components/TodoFilters";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [colorFilters, setColorFilters] = useState([]);

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleMarkAllCompleted = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
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

  const handleColorChange = (index, color) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? { ...todo, color } : todo))
    );
  };

  const toggleColorFilter = (color) => {
    setColorFilters((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !todo.completed) ||
      (filter === "completed" && todo.completed);

    const matchesColor =
      colorFilters.length === 0 ||
      (todo.color && colorFilters.includes(todo.color));

    return matchesFilter && matchesColor;
  });

  return (
    <div className="p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Todo App
      </h1>

      
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
              <select
                className="border border-gray-300 rounded-lg p-1 focus:ring-2 focus:ring-blue-500"
                value={todo.color || ""}
                onChange={(e) => handleColorChange(index, e.target.value)}
              >
                <option value="">Select Color</option>
                <option value="Purple">Purple</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
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

      {/* Actions */}
      <div>
        <TodoActions
          handleMarkAllCompleted={handleMarkAllCompleted}
          handleClearCompleted={handleClearCompleted}
        />
      </div>

      <br />

      {/* Remaining Todos */}
      <h2 className="text-center text-gray-700 font-medium">
        Remaining Todos:{" "}
        <span className="font-bold text-gray-800">
          {todos.filter((todo) => !todo.completed).length}
        </span>
      </h2>

      {/* Todo Filters */}
      <TodoFilters
        setFilter={setFilter}
        toggleColorFilter={toggleColorFilter}
      />
    </div>
  );
}

export default App;

