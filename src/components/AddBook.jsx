// src/components/AddBook.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../utils/booksSlice';
import AddBookForm from './AddBookForm';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
    alert("Book added successfully!");
    navigate('/browse');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Add a New Book</h1>
      <AddBookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default AddBook;