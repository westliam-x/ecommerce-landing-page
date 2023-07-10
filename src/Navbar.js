import { Input } from "react-ui";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

library.add(faShoppingCart, faUser, faSearch, faBars);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between mt-8 mx-10 pl-7">
      <header className="text-4xl flex items-center">
        <span className="mr-2">Nostra</span>
        {/* <img src="../images/nostraLogo.png" alt="Logo" /> */}
      </header>
      <div className="flex items-center">
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon className="text-lg" icon="bars" />
        </button>
        <ul
          className={`md:flex text-lg space-x-8 ${
            isOpen ? "block" : "hidden"
          } md:space-x-4 md:mt-0`}
        >
          <li className="md:mt-4">Shop</li>
          <li className="md:mt-4">Most Wanted</li>
          <li className="md:mt-4">New Arrivals</li>
          <li className="md:mt-4">Brands</li>
        </ul>
      </div>
      <div id="icons" className="flex items-center space-x-4">
        <form>
          <Input className="hidden sm:block py-2 px-4 bg-gray-50" placeholder="Search" />
        </form>
        <FontAwesomeIcon className="py-2 px-4 text-lg" icon="shopping-cart" />
        <FontAwesomeIcon className="py-2 px-4 text-lg" icon="user" />
      </div>
    </nav>
  );
}
