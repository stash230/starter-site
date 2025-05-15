import React from 'react';
function About() {
  return (
    <div className="md:flex items-center gap-10 py-10 px-6">
      <img
        src="/images/Image3.jpeg"
        alt="About"
        className="w-full md:w-1/2 rounded-lg shadow-md"
      />
      <div className="mt-6 md:mt-0">
        <h1 className="text-4xl font-bold text-green-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          We are a small team passionate about building clean and fast websites.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>React experts</li>
          <li>Pixel-perfect design</li>
          <li>Tailwind-first development</li>
        </ul>
      </div>
    </div>
  );
}
export default About;
