import React, { useContext, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { CartContext } from '../../App'

const Header = () => {
  const location = useLocation()  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const {cart, setCart} = useContext(CartContext) || []

  const cartLength = cart.length; 



 

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-b-gray-200 border-b ">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="HeroGadget"
          title="HeroGadget"
          className="inline-flex items-center"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-200">
            <svg
              className="flex-shrink-0 w-7 h-7 rounded-full text-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              {" "}
              <path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z" />
            </svg>
          </div>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
            Gadget
          </span>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              aria-label="Shop"
              title="Shop"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <Link to="/cart" aria-label="Cart" title="Cart">
              <div className="relative py-3 flex">
                <ShoppingCartIcon
                  className={`h-6 w-6 ${
                    location.pathname === "/cart"
                      ? "text-purple-500"
                      : "text-cyan-600"
                  }`}
                />
                <sup className="text-xl">{cartLength}</sup>
              </div>
            </Link>
          </li>
          <li>
            <NavLink
              to="/about"
              aria-label="About Us"
              title="About Us"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {/* mobile menu */}
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="HeroGadget"
                      title="HeroGadget"
                      className="inline-flex items-center"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                          className="flex-shrink-0 w-5 h-5 rounded-full text-cyan-600"
                        >
                          <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                        </svg>
                      </div>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        HG
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/shop"
                        aria-label="Shop"
                        title="Shop"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cart"
                        aria-label="Cart"
                        title="Cart"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        <div className="relative py-3 flex">
                          <ShoppingCartIcon className="h-6 w-6 text-cyan-400" />
                        <sup className="text-xl">{cartLength}</sup>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        aria-label="About Us"
                        title="About Us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header
