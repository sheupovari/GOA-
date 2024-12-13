import React from "react";

const App = () => {
  const heroes = [
    { name: "Spider-Man", power: "Wall-crawling, Web-shooting" },
    { name: "Batman", power: "Genius intellect, Martial arts" },
    { name: "Wonder Woman", power: "Super strength, Lasso of Truth" },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="bg-purple-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Superheroes</h1>
      </header>
      <main className="p-4 grid grid-cols-3 gap-4">
        {heroes.map((hero, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-md text-center"
          >
            <h2 className="text-xl font-semibold">{hero.name}</h2>
            <p>{hero.power}</p>
          </div>
        ))}
      </main>
      <footer className="bg-purple-800 text-white text-center p-4">
        <p>© 2024 Superhero Fan Club</p>
      </footer>
    </div>
  );
};

export default App;
