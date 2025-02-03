import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="./logo.webp"
          alt="Logo"
          className="h-10 w-10 mr-2"
        />
        <span className="text-xl font-bold">Readers Retreat</span>
      </div>
      <nav className="flex gap-4">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/browse" className="hover:text-gray-400">
          Browse Books
        </Link>
        <Link to="/add" className="hover:text-gray-400">
          Add Book
        </Link>
      </nav>
    </header>
  );
};

export default Header;