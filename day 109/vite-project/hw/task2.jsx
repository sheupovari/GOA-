import React from "react";

const App = () => {
  const stones = ["Smooth Stone", "Pebble", "Rock", "Quartz", "Granite"];

  return (
    <div className="container mx-auto p-4">
      <header className="bg-teal-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Seaside Stones</h1>
      </header>
      <main className="p-4 grid grid-cols-2 gap-4">
        {stones.map((stone, index) => (
          <div
            key={index}
            className="p-4 bg-gray-200 rounded-lg shadow-md text-center"
          >
            <h2 className="text-xl font-semibold">{stone}</h2>
            <p>Explore the beauty of {stone.toLowerCase()}.</p>
          </div>
        ))}
      </main>
      <footer className="bg-teal-800 text-white text-center p-4">
        <p>© 2024 Seaside Stones</p>
      </footer>
    </div>
  );
};

export default App;
