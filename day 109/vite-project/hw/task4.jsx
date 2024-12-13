import React from "react";

const App = () => {
  const items = [
    { id: 1, name: "Apple", color: "red" },
    { id: 2, name: "Banana", color: "yellow" },
    { id: 3, name: "Grape", color: "purple" },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="bg-green-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Fruit Basket</h1>
      </header>
      <main className="p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`p-4 mb-2 rounded-lg`}
            style={{ backgroundColor: item.color }}
          >
            <h2 className="text-lg font-semibold">{item.name}</h2>
          </div>
        ))}
      </main>
      <footer className="bg-green-800 text-white text-center p-4">
        <p>© 2024 Fruit Basket</p>
      </footer>
    </div>
  );
};

export default App;
