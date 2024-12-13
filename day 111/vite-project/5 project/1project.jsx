import React from "react";

const App = () => {
  const players = ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Mbappé"];

  return (
    <div className="container mx-auto p-4">
      <header className="bg-green-500 text-white text-center p-4">
        <h1 className="text-3xl font-bold">Football Stars</h1>
      </header>
      <main className="grid grid-cols-2 gap-4 p-4">
        {players.map((player, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded shadow p-4 text-center"
          >
            <h2 className="text-xl font-semibold">{player}</h2>
            <p>One of the greatest football players.</p>
          </div>
        ))}
      </main>
      <footer className="bg-green-800 text-white text-center p-4">
        <p>© 2024 Football World</p>
      </footer>
    </div>
  );
};

export default App;
