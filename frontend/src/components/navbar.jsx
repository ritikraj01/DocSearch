import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import React, { useContext , useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BACKEND_URL } from '../config';

const Navbar = () => {
  const { userId, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(userId);
  const navigate = useNavigate();
  
    const logoutPage = async () => {
      try {
        const response = await axios.get(`https://docsearch-1.onrender.com/user/logout`);
        console.log('Success:', response.data);
        logout();
        navigate("/login"); 
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
    }
    };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">DocSearch</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to={userId ? `/${userId}/search` : "/login"} className="hover:text-gray-200">Search Doctors</Link></li>
          <li><Link to={userId ? `/${userId}/appointments` : "/login"} className="hover:text-gray-200">Appointments</Link></li>
          {userId ? 
          <li>   
          <button
                onClick={logoutPage} className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
            Logout
            </button>
        </li>
          :
          <li>   
            <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
              Login / Signup
            </Link>
          </li>
          }
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 bg-blue-700 p-4 space-y-3 text-center">
          <li><Link to="/" className="block py-2 hover:text-gray-200">Home</Link></li>
          <li><Link to={userId ? `/${userId}/search` : "/search"} className="hover:text-gray-200">Search Doctors</Link></li>
          <li><Link to={userId ? `/${userId}/appointments` : "/appointments"} className="hover:text-gray-200">Appointments</Link></li>
          <li><Link to="/contact" className="block py-2 hover:text-gray-200">Contact</Link></li>
          {userId ? 
          <li>   
          <button
                onClick={logoutPage} className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
            Logout
            </button>
        </li>
          :
          <li>   
            <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
              Login / Signup
            </Link>
          </li>
          }
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
