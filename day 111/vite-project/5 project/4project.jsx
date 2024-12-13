import React from "react";

const App = () => {
  const products = ["iPhone", "MacBook", "iPad", "Apple Watch"];

  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-900 text-white text-center p-4">
        <h1 className="text-3xl font-bold">Apple Inc.</h1>
      </header>
      <main className="grid grid-cols-2 gap-4 p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded shadow p-4 text-center"
          >
            <h2 className="text-xl font-semibold">{product}</h2>
            <p>One of Apple's flagship products.</p>
          </div>
        ))}
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2024 Apple Inc.</p>
      </footer>
    </div>
  );
};

export default App;
