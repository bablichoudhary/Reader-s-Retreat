import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
      <p>&copy; 2023 Readers Retreat. All rights reserved.</p>
      <ul className=" flex justify-center ">
        <li className="p-2"><a href="https://github.com/bablichoudhary"><i className ="fa-brands fa-github"></i></a></li>
        <li className="p-2"><a href="https://www.linkedin.com/in/babli-choudhary-3b1180160"><i className ="fa-brands fa-linkedin"></i></a></li>
      </ul>
    </footer>
  );
};

export default Footer;