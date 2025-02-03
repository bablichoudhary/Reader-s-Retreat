import React from "react";
import AllBooks from "../components/AllBooks";
import { booksData } from "../utils/mockData";

const Home = () => {
  const categories = ["Fiction", "Science Fiction", "Non-Fiction"];

  return (
    <>
    <span className=" flex  justify-center"><h1 className="text-4xl mt-6 mb-6"> Welcome to Reader's Retreat</h1></span>
    <div>
      {categories.map((category) => (
        <div key={category}  className="mb-8 text-amber-950 text-2xl">
          <h2 className="text-2xl font-bold text-center my-6"> <img src="./book.png" className="w-8 h-8 inline "/> {category}</h2>
          <AllBooks books={booksData.filter((book) => book.category === category)} />
        </div>
      ))}
    </div>
    </>
  );
};

export default Home;