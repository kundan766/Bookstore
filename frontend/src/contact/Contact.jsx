import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <div className="mt-8 p-8 bg-white rounded shadow-md">
            <h1 className='font-bold text-blue-900 text-2xl justify-center mt-0 '>Contact</h1>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="number" className="text-sm font-medium">
                Number
              </label>
              <input
                type="tel"
                id="number"
                placeholder="Enter your number"
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
