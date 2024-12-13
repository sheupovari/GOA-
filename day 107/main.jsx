import React from "react";

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Modern Website</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#hero" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#contacts" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section
    id="hero"
    className="bg-blue-500 text-white text-center py-20 px-4"
  >
    <h2 className="text-4xl font-bold mb-4">Welcome to My Modern Website</h2>
    <p className="text-lg mb-8">
      A clean, responsive, and stylish website built with React and Tailwind CSS.
    </p>
    <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-600">
      Learn More
    </button>
  </section>
);

const Contacts = () => (
  <section id="contacts" className="py-20 px-4 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="block w-full p-4 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="block w-full p-4 mb-4 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="block w-full p-4 mb-4 border rounded-lg"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-4 rounded-lg hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-4">
    <p>© 2024 My Modern Website. All rights reserved.</p>
  </footer>
);

const App = () => (
  <>
    <Header />
    <Hero />
    <Contacts />
    <Footer />
  </>
);

export default App;
