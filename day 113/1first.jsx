import React from "react";

const App = () => {
  const services = [
    { title: "Digital Marketing", description: "Boost your online presence." },
    { title: "SEO Optimization", description: "Improve your search engine rankings." },
    { title: "Social Media Management", description: "Engage your audience effectively." },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="bg-indigo-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Marketing Solutions</h1>
      </header>
      <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-md text-center"
          >
            <h2 className="text-xl font-bold">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </main>
      <footer className="bg-indigo-800 text-white text-center p-4">
        <p>© 2024 Marketing Solutions</p>
      </footer>
    </div>
  );
};

export default App;
