import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Beating-Dead-Horses. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
