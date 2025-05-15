import React from 'react';
function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-4xl font-bold text-pink-600">Contact Us</h1>
      <p className="text-gray-700">We’d love to hear from you! Fill out the form below or email us.</p>

      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
        <textarea placeholder="Your Message" className="w-full border p-3 rounded h-32"></textarea>
        <button type="submit" className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700">
          Send Message
        </button>
      </form>

      <div className="text-sm text-gray-500">
        Or email us at: <a href="mailto:info@beatadeadhorse.com" className="text-pink-600 underline">info@beatadeadhorse.com</a>
      </div>
    </div>
  );
}
export default Contact;
