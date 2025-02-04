import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../utils/booksSlice';
import AddBookForm from './AddBookForm';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState(""); 

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
    setMessage("✅ Book added successfully!"); 

    
    setTimeout(() => {
      setMessage("");
      navigate('/browse'); 
    }, 5000);
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold text-center my-6">Add a New Book</h1>

      {message && (
        <div className="mb-4 p-3 text-green-700 bg-green-100 border border-green-500 rounded-md text-center">
          {message}
        </div>
      )}

      <AddBookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default AddBook;
