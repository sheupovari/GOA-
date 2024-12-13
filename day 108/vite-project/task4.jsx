import React from "react";

const Landing = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center py-4 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
      </header>
      <section className="grid grid-cols-3 gap-4 py-8">
        <div className="bg-blue-500 text-white p-4 rounded-lg">Section 1</div>
        <div className="bg-green-500 text-white p-4 rounded-lg">Section 2</div>
        <div className="bg-red-500 text-white p-4 rounded-lg">Section 3</div>
      </section>
      <footer className="text-center py-4 bg-gray-800 text-white">
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Landing;
