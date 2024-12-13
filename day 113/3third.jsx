import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-2 p-2 mb-4"
        placeholder="Add a task"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2">
        Add
      </button>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="p-2 bg-gray-200 my-2">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
