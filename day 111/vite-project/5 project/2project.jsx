import React from "react";

const App = () => {
  const movies = [
    { title: "Inception", director: "Christopher Nolan", year: 2010 },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="bg-blue-500 text-white text-center p-4">
        <h1 className="text-3xl font-bold">My Favorite Movies</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded shadow p-4 text-center"
          >
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p>Directed by: {movie.director}</p>
            <p>Released in {movie.year}</p>
          </div>
        ))}
      </main>
      <footer className="bg-blue-800 text-white text-center p-4">
        <p>© 2024 Movie Fanatics</p>
      </footer>
    </div>
  );
};

export default App;
