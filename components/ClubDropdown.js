import React, { useState } from 'react';
import Link from 'next/link';

const ClubDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-Poppins rounded text-white items-center justify-center hover:text-[#217EE3]"
        onClick={handleDropdownToggle}
      >
        SIG&apos;s
      </button>
      {isDropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            <Link
              href="/AI"
              className="block px-4 py-2 font-Poppins rounded text-gray-700 hover:bg-gray-100"
              onClick={handleOptionClick}
            >
              AI
            </Link>
            <Link
              href="/CP"
              className="block px-4 py-2 font-Poppins rounded text-gray-700 hover:bg-gray-100"
              onClick={handleOptionClick}
            >
              CP
            </Link>
            <Link
              href="/Cyber"
              className="block px-4 py-2 font-Poppins rounded text-gray-700 hover:bg-gray-100"
              onClick={handleOptionClick}
            >
              Cyber
            </Link>
            <Link
              href="/Glitch"
              className="block px-4 py-2 font-Poppins rounded text-gray-700 hover:bg-gray-100"
              onClick={handleOptionClick}
            >
              Glitch
            </Link>
            <Link
              href="/WebDev"
              className="block px-4 py-2 font-Poppins rounded text-gray-700 hover:bg-gray-100"
              onClick={handleOptionClick}
            >
              WebDev
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubDropdown;
