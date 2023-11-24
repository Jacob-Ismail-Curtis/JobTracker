import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-transparent px-10 py-5">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              Applications
            </Link>
          </li>
          <li>
            <Link to="/stats" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              Stats
            </Link>
          </li>
          <li>
            <Link to="/stats" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
