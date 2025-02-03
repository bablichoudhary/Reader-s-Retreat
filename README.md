**Library Website - Readers Retreat**
Welcome to Readers Retreat, a library website built with React, Vite, and Tailwind CSS. This project allows users to browse books by category, search for books by title or author, view book details, and add new books to the library.

**Features**
Home Page:

Displays books grouped by category (e.g., Fiction, Science Fiction, Non-Fiction).

Each book card includes:

Title

Author

Rating

Description

A View Details button to see more information about the book.

Browse Books Page:

Includes a search bar to filter books by title or author.

Displays search results dynamically.

Add Book Page:

Allows users to add new books to the library.

Input fields for:

Title

Author

Category

Rating

Description

Image URL

Book Details Page:

Displays detailed information about a selected book.

Includes a Back to Home button for easy navigation.

Page Not Found:

A custom 404 page for undefined routes.

Includes a button to return to the home page.

Responsive Design:

Built with Tailwind CSS for a clean and responsive layout.

State Management with Redux:

Centralized state management for books using Redux Toolkit.

Features like adding books and filtering books are handled by Redux.



**Installation and Setup**

git clone  https://github.com/bablichoudhary/Reader-s-Retreat.git
cd library-app

**Install Dependencies:**
npm install

**Start the Development Server:**
npm run dev


**Open the Application:**
Visit http://localhost:5173 in your browser.

**Folder Structure**
|--src/
   |-- components/
   |   |-- Header.jsx
   |   |-- Footer.jsx
   |   |-- Book.jsx
   |   |-- AllBooks.jsx
   |   |-- SearchBar.jsx
   |   |-- AddBookForm.jsx
   |   |-- BookDetails.jsx
   |   |-- PageNotFound.jsx
   |   |-- Home.jsx
   |   |-- BrowseBooks.jsx
   |   |-- main.jsx
   |   |-- App.jsx
|--utils/
   |-- AddBook.jsx
   |-- mockData.js
   |--appStore.js
   |--booksSlice.js


**Acknowledgments**
Google Books API: For providing placeholder book images.

Tailwind CSS: For making styling easy and efficient.

React Router: For enabling dynamic routing in the application.

Redux Toolkit: For simplifying state management.

**website is now live! Visit [https://reader-s-retreat.vercel.app/] to explore."**
   
   


