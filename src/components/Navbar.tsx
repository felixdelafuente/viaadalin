import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className='fixed px-4 md:px-16 lg:px-32 py-3 z-50 w-full bg-background bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-sm'>
        <nav className='flex justify-between items-center max-container'>
          <a href='/' className='text-base font-recoletaBl'>
            Via Adalin
          </a>
          <ul className='flex justify-center items-center gap-6 max-lg:hidden font-openSans'>
            <li className='text-black hover:text-upMaroon font-normal hover:font-bold text-sm'>
              <Link to='/'>Home</Link>
            </li>
            <li className='text-black hover:text-upMaroon font-normal hover:font-bold text-sm'>
              <Link to='/blogs'>Blog</Link>
            </li>
            <li>
              <a
                href='https://www.facebook.com/viahengsp'
                target='_blank'
                className='text-black hover:text-upMaroon text-base'
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/viahengslp/'
                target='_blank'
                className='text-black hover:text-upMaroon text-base'
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
          <div
            className='hidden max-lg:block cursor-pointer'
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className='text-4xl' />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className='w-full fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-background bg-opacity-60 backdrop-filter backdrop-blur-lg z-50 transition-all'>
            <div
              className='hidden max-lg:block fixed right-0  px-4 py-4 cursor-pointer'
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className='text-4xl' />
            </div>
            <ul className=' lg:hidden text-base gap-4 flex flex-col items-center justify-center h-full '>
              <li className='text-black hover:text-upMaroon font-normal hover:font-bold'>
                <Link to='/'>Home</Link>
              </li>
              <li className='text-black hover:text-upMaroon font-normal hover:font-bold'>
                <Link to='/blogs'>Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
