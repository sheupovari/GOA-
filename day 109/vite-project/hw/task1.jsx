
import React from "react";

const Header = () => (
  <header className="bg-blue-500 text-white p-4">
    <h1 className="text-2xl font-bold">My Website</h1>
  </header>
);

export default Header;


import React from "react";

const Main = () => (
  <main className="p-4">
    <h2 className="text-xl font-semibold">Welcome to the main content</h2>
    <p>This is a simple webpage built with React components.</p>
  </main>
);



import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4">
    <p>© 2024 My Website. All rights reserved.</p>
  </footer>
);



// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);


