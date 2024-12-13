import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState(["Task 1", "Task 2"]);

  const addTodo = () => {
    setTodos([...todos, `Task ${todos.length + 1}`]);
  };

  const removeTodo = () => {
    setTodos(todos.slice(0, -1));
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <ul className="mb-4">
        {todos.map((todo, index) => (
          <li key={index} className="p-2 bg-gray-200 my-2">
            {todo}
          </li>
        ))}
      </ul>
      <button onClick={addTodo} className="bg-green-500 text-white px-4 py-2 mr-2">
        Add Task
      </button>
      <button onClick={removeTodo} className="bg-red-500 text-white px-4 py-2">
        Remove Task
      </button>
    </div>
  );
};

export default App;
