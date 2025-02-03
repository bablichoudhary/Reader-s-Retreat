import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-4 max-w-sm  p-4">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
      />
      <button
        type="submit"
        className="bg-blue-500  text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default Search;