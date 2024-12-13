import React from "react";

const App = () => {
  const products = ["Galaxy S Series", "Galaxy Tab", " TVs", "Galaxy Watch"];

  return (
    <div className="container mx-auto p-4">
      <header className="bg-blue-600 text-white text-center p-4">
        <h1 className="text-3xl font-bold">Samsung Electronics</h1>
      </header>
      <main className="grid grid-cols-2 gap-4 p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded shadow p-4 text-center"
          >
            <h2 className="text-xl font-semibold">{product}</h2>
            <p>A premium product from Samsung.</p>
          </div>
        ))}
      </main>
      <footer className="bg-blue-800 text-white text-center p-4">
        <p>© 2024 Samsung Electronics</p>
      </footer>
    </div>
  );
};

export default App;
