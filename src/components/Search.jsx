import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const isValidInput = (input) => {
    return /^[a-zA-Z0-9\s]+$/.test(input.trim()) && input.trim().length > 1;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!isValidInput(query)) {
      setError("Please enter a valid title or author.");
      return;
    }
    setError("");
    onSearch(query);
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-lg mx-auto p-4 flex flex-col sm:flex-row gap-3"
    >
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setError("");
          }}
          className={`w-full p-3 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800`}
        />
       
       {error && (
    <p className="absolute left-0 top-full mt-1 text-red-500 text-sm bg-red-100 px-2 py-1 rounded-md shadow-md">
      {error}
    </p>
  )}
       
    </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 "
      >
        Search
      </button>
    </form>
  );
};

export default Search;
