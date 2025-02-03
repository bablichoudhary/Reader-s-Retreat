import React from "react";
import { useParams , useNavigate} from "react-router-dom";
import { booksData } from "../utils/mockData";

const BookDetails = () => {

  const navigate = useNavigate();
  const { id } = useParams(); // Get the book ID from the URL
  const book = booksData.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div className="text-center text-red-500">Book not found!</div>;
  }

  return (
  
    <div className="max-w-4xl mx-auto p-6">
          
            <button onClick={() => navigate(-1)} className='bg-black m-2 p-2 rounded-lg text-white'>
            <i className="fa-solid fa-arrow-left"></i> Back
            </button>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-gray-900 mb-2">Author: {book.author}</p>
          <p className="text-gray-900 mb-2">Category: {book.category}</p>
          <p className="text-gray-900 mb-2">⭐ {book.rating}</p>
          <p className="text-gray-900">{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;