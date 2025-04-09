import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FiPhone } from "react-icons/fi";

// Data structure for nav links
const navItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about.html" },
  {
    label: "Pages",
    submenu: [
      { label: "Faq", to: "/faq.html" },
      { label: "Login", to: "/login.html" },
      { label: "Register", to: "/register.html" },
      { label: "Gallery", to: "/gallery.html" },
      { label: "Forgot Password", to: "/reset-password.html" },
      { label: "Testimonial", to: "/testimonial.html" },
      {
        label: "Team",
        submenu: [
          { label: "Team", to: "/team.html" },
          { label: "Team Detail", to: "/team-detail.html" },
        ],
      },
    ],
  },
  {
    label: "Program",
    submenu: [
      { label: "Program", to: "/program.html" },
      { label: "Program Detail", to: "/program-detail.html" },
    ],
  },
  { label: "Contact", to: "/contact.html" },
];

// Recursive submenu renderer
const renderSubmenu = (items) => (
  <ul className="absolute left-0 mt-0 w-48 bg-white rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none invisible group-hover:visible transition-opacity duration-200 z-10">
    {items.map((item, index) =>
      item.submenu ? (
        <li key={index} className="relative group">
          <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
            {item.label}
          </span>
          <ul className="absolute left-full top-0 mt-0 w-40 bg-white rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none invisible group-hover:visible transition-opacity duration-200 z-10">
            {item.submenu.map((subItem, subIndex) => (
              <li key={subIndex}>
                <Link
                  to={subItem.to}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ) : (
        <li key={index}>
          <Link to={item.to} className="block px-4 py-2 hover:bg-gray-100">
            {item.label}
          </Link>
        </li>
      )
    )}
  </ul>
);

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-9 flex justify-between items-center flex-wrap">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://demo.themeim.com/html/kidscamp/assets/images/logo.svg"
            alt="kidscamp"
            className="h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          {navItems.map((item, index) =>
            item.submenu ? (
              <div key={index} className="relative group">
                <span className="cursor-pointer">{item.label}</span>
                {renderSubmenu(item.submenu)}
              </div>
            ) : (
              <Link key={index} to={item.to}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+302-555-0107"
            className="text-sm text-gray-600 flex items-center gap-2"
          >
            <button className="bg-blue-100 text-blue-600 rounded-full p-2 hover:bg-blue-200 transition">
              <FiPhone size={16} />
            </button>
            <span>302 555-0107</span>
          </a>

          <Link
            to="/about.html"
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-600 transition"
          >
            Register
          </Link>

          {/* Hamburger menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-md space-y-2 text-gray-700 font-medium">
          {navItems.flatMap((item) =>
            item.submenu
              ? item.submenu.flatMap((subItem) =>
                  subItem.submenu
                    ? subItem.submenu.map((deepItem, i) => (
                        <Link key={i} to={deepItem.to} className="block">
                          {deepItem.label}
                        </Link>
                      ))
                    : [
                        <Link
                          key={subItem.to}
                          to={subItem.to}
                          className="block"
                        >
                          {subItem.label}
                        </Link>,
                      ]
                )
              : [
                  <Link key={item.to} to={item.to} className="block">
                    {item.label}
                  </Link>,
                ]
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;
