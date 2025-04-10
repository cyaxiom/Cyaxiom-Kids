// NewsletterOne.js
import React from 'react';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Subscribe = () => {
  return (
    <section className="py-16 relative" style={{ backgroundColor: '#05073C' }}>
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover opacity-10"
        style={{ backgroundImage: "url(assets/images/background/pattern-2.png)" }}
      ></div>
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover opacity-10"
        style={{ backgroundImage: "url(assets/images/background/pattern-3.png)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Title Column */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300">NEWSLETTER</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sign up to Our Newsletter for Latest Update
            </h2>
          </div>

          {/* Form Column */}
          <div>
            <form method="post" action="/contact" className="flex items-center gap-4">
              <div className="relative flex-1">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="search-field"
                  placeholder="Enter Email Here"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-[#144DF8] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                Subscribe Now
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

