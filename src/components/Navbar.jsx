// components/Navbar.tsx
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:text-white shadow-sm dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo/Brand */}
          <Link to="/" className="text-xl font-semibold text-gray-800 dark:text-white">
           Hi!
          </Link>
          
          {/* Navigation Links */}
          <div className="md:flex flex flex-wrap space-x-5 md:space-x-18">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `hover:text-red-600 ${isActive ? 'text-red-700 font-medium' : 'text-gray-600'}`
              }
            >
              Home
            </NavLink>
            
            
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `hover:text-red-600 ${isActive ? 'text-red-700 font-medium' : 'text-gray-600'}`
              }
            >
              Projects
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `hover:text-red-600 ${isActive ? 'text-red-700 font-medium' : 'text-gray-600'}`
              }
            >
              About
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `hover:text-red-700 ${isActive ? 'text-red-700 font-medium' : 'text-gray-600'}`
              }
            >
              Contact
            </NavLink>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;