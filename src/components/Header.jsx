import { Link } from 'react-router-dom';
import React from 'react';
function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4 space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
}

export default Header;
