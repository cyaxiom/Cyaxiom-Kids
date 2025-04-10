import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Registration = () => {
  return (
    <section className="py-16 relative bg-[#05073C] font-sans">
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover opacity-10"
        style={{ backgroundImage: "url(/assets/images/background/pattern-1.png)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Info Column */}
          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-300 font-medium tracking-wide">
              Registration Now!
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
              Register for Our Adventure <span className="text-blue-500">Bootcamp</span> Today!
            </h2>
            <p className="text-gray-400 max-w-md text-base md:text-lg">
              Start your journey with us! Engage in outdoor learning, meet new friends, and have fun while growing.
            </p>
            <ul className="space-y-5 text-gray-300 text-base">
              <li className="flex items-start gap-4">
                <FaPhone className="text-blue-500 text-xl mt-1" />
                <div>
                  <p className="font-semibold">Call Us Now</p>
                  <a href="tel:3025550107" className="hover:text-blue-400 transition-colors duration-200">
                    (302) 555-0107
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaEnvelope className="text-blue-500 text-xl mt-1" />
                <div>
                  <p className="font-semibold">Mail Us</p>
                  <a href="mailto:support@kidscamp.com" className="hover:text-blue-400 transition-colors duration-200">
                    support@kidscamp.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
                <div>
                  <p className="font-semibold">Our Location</p>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                    1901 Cir. Shiloh, Hawaii 81063
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Form Column */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Bootcamp Registration</h3>
            <form method="post" action="/blog" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Child's Full Name", name: "firstname", type: "text" },
                  { label: "Guardian Name", name: "lastname", type: "text" },
                  { label: "Email Address", name: "email", type: "email" },
                  { label: "Phone Number", name: "phone", type: "tel" }
                ].map(({ label, name, type }) => (
                  <div key={name}>
                    <label className="block text-gray-700 text-sm font-medium mb-2">{label}</label>
                    <input
                      type={type}
                      name={name}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Child's Age</label>
                  <select 
                    name="age" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                  >
                    <option>10 - 12</option>
                    <option>13 - 15</option>
                    <option>16 - 18</option>
                    <option>19 - 21</option>
                    <option>22 - 24</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Medical Conditions/Allergies</label>
                  <select 
                    name="medical" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                  >
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Additional Message</label>
                  <textarea 
                    name="message" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 transition duration-150"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    className="w-full bg-[#144DF8] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Submit Now
                    <FaPhone className="rotate-90 text-white" />
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Registration;
