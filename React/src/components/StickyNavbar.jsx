// Import statements
import React from 'react';

const StickyNavbar = () => {
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal text-blue-gray-700">
        <a href="#!" className="flex items-center hover:text-blue-500">
          AB Calculator
        </a>
      </li>
      <li className="p-1 font-normal text-blue-gray-700">
        <a href="#!" className="flex items-center hover:text-blue-500">
          About Me
        </a>
      </li>
    </ul>
  );

  return (
    <div className="w-full">
      <nav className="sticky top-0 z-10 h-max max-w-full bg-white shadow-md px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>
      </nav>
    </div>
  );
}

export default StickyNavbar;