import React from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaShieldAlt, FaLaughBeam } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaChalkboardTeacher className="text-4xl text-blue-500 mb-4" />,
    title: 'Engaging Curriculum',
    text: 'Lorem ipsum dol amet consectetur adipiscing elit Ut et mass Aliquam in hendrerit urnan.',
  },
  {
    icon: <FaUserGraduate className="text-4xl text-blue-500 mb-4" />,
    title: 'Expert Instructors',
    text: 'Lorem ipsum dol amet consectetur adipiscing elit Ut et mass Aliquam in hendrerit urnan.',
  },
  {
    icon: <FaShieldAlt className="text-4xl text-blue-500 mb-4" />,
    title: 'Safe Environment',
    text: 'Lorem ipsum dol amet consectetur adipiscing elit Ut et mass Aliquam in hendrerit urnan.',
  },
  {
    icon: <FaLaughBeam className="text-4xl text-blue-500 mb-4" />,
    title: 'Fun and Adventure',
    text: 'Lorem ipsum dol amet consectetur adipiscing elit Ut et mass Aliquam in hendrerit urnan.',
  },
];

const Discover = () => {
  return (
    <section className="py-16 bg-[#05073C]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300">Discover the Difference</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Discover Magic of Our <br /> Kids' <span className="text-blue-500">Experience</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-lg animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {service.icon}
              <h5 className="text-xl font-semibold mb-2">
                <a href="/service-detail" className="text-gray-800 hover:text-blue-500">
                  {service.title}
                </a>
              </h5>
              <p className="text-gray-600">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
