import React from "react";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-red-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Soviet Union</h1>
      </header>
      <main className="p-4">
        <h2 className="text-xl font-bold">History</h2>
        <p>
          The Soviet Union (USSR) was a socialist state that spanned much of Eurasia 
          from 1922 to 1991.
        </p>
        <h2 className="text-xl font-bold mt-4">Famous Figures</h2>
        <ul>
          <li>Vladimir Lenin</li>
          <li>Joseph Stalin</li>
          <li>Mikhail Gorbachev</li>
        </ul>
      </main>
      <footer className="bg-red-800 text-white text-center p-4">
        <p>© 2024 History of USSR</p>
      </footer>
    </div>
  );
};

export default App;
