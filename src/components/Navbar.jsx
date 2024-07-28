import React from 'react';
import { FaCaretDown, FaSearch } from "react-icons/fa";
import Logo from '../assets/demo.png';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Products",
    link: "/",
  },
  {
    id: 3,
    name: "Category",
    link: "/#",
  },
  {
    id: 4,
    name: "AboutUs",
    link: "/#",
  },
  {
    id: 5,
    name: "ContactUs",
    link: "/#",
  }
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];


const Navbar = () => {
  return (
    <div className='shadow-md duration-200 bg-white dark:bg-gray-900 dark:text-white relative z-40'>
      {/* upper Navbar */}
      <div className='bg-slate-50 sm:py-2 dark:bg-gray-800'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2 dark:text-white'>
              <img src={Logo} alt="logo" className='w-20' />
              Demo
            </a>
          </div>
          <div className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
              {
                Menu.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='inline-block px-4 hover:text-cyan-400 duration-200 dark:hover:text-cyan-300'>{data.name}</a>
                  </li>
                ))
              }
              <li className='group relative cursor-pointer'>
                <a href="#" className="flex items-center gap-[2px] py-2">ProductView
                <span><FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/></span></a>
                <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black'>
                  <ul>
                    {DropdownLinks.map((data)=>(
                      <li key={data.id}>
                        <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-cyan-400'>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder='search'
                className='w-[200px] px-2 py-1 focus:outline-none focus:border-1 focus:border-primary sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 dark:bg-gray-700 dark:text-white' />
              <FaSearch className='text-cyan-400 group-hover:text-cyan-600 absolute top-1/2 -translate-y-1/2 right-3 dark:text-cyan-300' />
            </div>
          </div>
          <button onClick={() => alert("Ordering not available yet")}
            className='bg-gradient-to-r from-cyan-600 to-cyan-300 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
          </button>
          
          <div>
            <DarkMode />
          </div>
    
        </div>
        {/* lower navbar */}
        <div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
