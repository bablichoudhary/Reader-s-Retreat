import React, { useState } from "react";
import Search from "./Search";
import AllBooks from "./AllBooks";
import { booksData } from "../utils/mockData";

const BrowseBooks = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearch = (query) => {
    const filtered = booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Browse Books</h1>
      <div className=" flex justify-center">
      <Search onSearch={handleSearch} / >
      </div>
      {filteredBooks.length > 0 ? (
        <AllBooks books={filteredBooks} />
      ) : (
        <p className=" text-xl text-center text-black mt-7">Books will appear here.</p>
      )}
      
    </div>
  );
};

export default BrowseBooks;