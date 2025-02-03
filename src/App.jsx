import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import BrowseBooks from "./components/BrowseBooks";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<BrowseBooks />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;