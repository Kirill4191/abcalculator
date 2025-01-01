// Import statements
import React from 'react';

const StickyNavbar = () => {
  const navList = (
    <ul className="text-p-lg col-start-4 col-end-10 flex justify-between py-1 font-normal text-blue-gray-700 [&>a]:flex [&>a]:items-center">
      <li>
        <a href="#!" className="hover:text-blue-500">AB Calculator</a>
      </li>
      <li>
        <a href="#!" className="hover:text-blue-500">About me</a>
      </li>
    </ul>
  );

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md">
      <div className='px-20'>
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-12 gap-6">
            {navList}
          </div>
        </div>
      </div>
    </nav>

  );
}

export default StickyNavbar;