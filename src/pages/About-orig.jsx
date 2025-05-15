import React from 'react';
function About() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-4xl font-bold text-green-500">
        Tailwind is working!
      </h1>
      <img src="/images/Image1.jpeg" alt="Van Life" className="rounded shadow-md max-w-full h-auto" />
      <p className="text-lg text-red-900">
        If this is styled, you're good to go.
      </p>
      <img src="/images/Image2.jpeg" alt="Van Life" className="rounded shadow-md max-w-full h-auto" />
      <p className="text-lg text-gray-700">
        If this is styled, you're good to go.
      </p>
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
        Test Button
      </button>
    </div>
  );
}
export default About;
