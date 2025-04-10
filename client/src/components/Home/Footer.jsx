import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaHeart } from 'react-icons/fa';

const programs = [
  'Fun & Fitness', 'Sports Spectacular', "Nature's Gymnasts", 
  'Warrior Training', 'Adventure Explorers', 'Champions Camp', 'Team Building'
];

const resources = [
  'Blog', 'FAQs', 'Help Center', 'Case Studies', 'Whitepapers', 'Services'
];

const galleryImages = [
  'assets/images/gallery/instagram-1.jpg',
  'assets/images/gallery/instagram-2.jpg',
  'assets/images/gallery/instagram-3.jpg',
  'assets/images/gallery/instagram-4.jpg',
  'assets/images/gallery/instagram-5.jpg',
  'assets/images/gallery/instagram-6.jpg',
];

const Footer = () => {
  return (
    <footer className="bg-[#05073C] text-gray-300">
      {/* Widgets Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <a href="/">
                  <img src="assets/images/footer-logo.png" alt="Footer Logo" className="w-32" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                </p>
                <div className="flex gap-4">
                  {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram].map((Icon, idx) => (
                    <a key={idx} href="#" className="hover:text-blue-500">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-white mb-4">Programs</h5>
                <ul className="space-y-2">
                  {programs.map((program, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-blue-500">{program}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-xl font-semibold text-white mb-4">Resources</h5>
                <ul className="space-y-2">
                  {resources.map((resource, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-blue-500">{resource}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-white mb-4">Gallery</h5>
                <div className="grid grid-cols-3 gap-2">
                  {galleryImages.map((img, i) => (
                    <a key={i} href={img}>
                      <img src={img} alt={`Gallery Image ${i + 1}`} className="w-full h-auto rounded" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-2">
            <div>© 2024 Kidscamp. All rights reserved.</div>
            <div className="flex items-center gap-1">
              Design with <FaHeart className="text-red-500" /> by Themeim
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
