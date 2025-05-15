import React from 'react';
function Home() {
  //
  //return <h1 className="text-3xl font-bold text-indigo-600">Home Page</h1>;
return (
    <div className="text-center space-y-8">
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <h1 className="text-5xl font-bold">Welcome to My Site</h1>
        <p className="text-xl mt-4">We build great things with React and Tailwind.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition">
          Learn More
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-4 py-12">
        <div className="p-6 border rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Fast</h2>
          <p>Powered by Vite for lightning-fast development.</p>
        </div>
        <div className="p-6 border rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Modern</h2>
          <p>Built with modern tooling and clean design.</p>
        </div>
        <div className="p-6 border rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Customizable</h2>
          <p>Easily adaptable to your project's needs.</p>
        </div>
      </section>
    </div>
  );


}
export default Home;
