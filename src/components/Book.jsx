import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-70  p-2">
      <img
        src={book.image}
        alt={book.title}
        className="w-58 h-58 ml-4 rounded-lg "
      />
      <div className="p-4">
        <h3 className="text-xl text-black font-bold mb-2">{book.title}</h3>
        <p className="text-gray-800 text-sm">Author: {book.author}</p>
        <p className="text-gray-600">⭐ {book.rating}</p>
       
        <Link
          to={`/book/${book.id}`}
          className="mt-4 inline-block bg-fuchsia-950 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Book;