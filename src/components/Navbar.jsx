import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent px-10 py-5">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              Applications
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              Stats
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
