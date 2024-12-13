import React from "react";

const App = () => {
  const guineaPigs = ["Fluffy", "Snowball", "Coco", "Patches"];

  return (
    <div className="container mx-auto p-4">
      <header className="bg-teal-500 text-white text-center p-4">
        <h1 className="text-3xl font-bold">Guinea Pig Paradise</h1>
      </header>
      <main className="grid grid-cols-2 gap-4 p-4">
        {guineaPigs.map((pig, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded shadow p-4 text-center"
          >
            <h2 className="text-xl font-semibold">{pig}</h2>
            <p>A lovely guinea pig!</p>
          </div>
        ))}
      </main>
      <footer className="bg-teal-800 text-white text-center p-4">
        <p>© 2024 Guinea Pig Lovers</p>
      </footer>
    </div>
  );
};

export default App;
