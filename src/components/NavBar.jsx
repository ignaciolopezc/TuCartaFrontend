import { useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

import logoDark from "../assets/images/logo-dark.png"
import Login from '../pages/Login';


const Navbar = () => {
	const [currentPage, setCurrentPage] = useState('home');
	const [selectedItem, setSelectedItem] = useState('home');
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'contacto', label: 'Contacto' },
		{ id: 'login', label: 'Login' },
	];
	
	const menuIcon = {
		closed: {
		d: "M 2 2.5 L 20 2.5 M 2 8.5 L 20 8.5 M 2 14.5 L 20 14.5"
		},
		open: {
		d: "M 3 2.5 L 17 16.5 M 3 16.5 L 17 2.5"
		}
	};

	  const handleNavigation = (itemId) => {
		setSelectedItem(itemId);
		setIsOpen(false);
	};


  return (
    <>
		<nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="text-xl font-semibold">
						<img src={logoDark} alt="Logo" />
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
						onClick={() => setIsOpen(!isOpen)}
						className="w-6 h-6 relative focus:outline-none">
							<svg width="23" height="18" viewBox="0 0 23 18">
								<motion.path
								fill="transparent"
								strokeWidth="2"
								stroke="currentColor"
								strokeLinecap="round"
								initial="closed"
								animate={isOpen ? "open" : "closed"}
								variants={menuIcon}
								transition={{ duration: 0.3 }}
								/>
							</svg>
						</button>
					</div>

					{/* Desktop menu */}
					<div className="hidden md:flex space-x-4">
						{menuItems.map((item) => (
							<a
							key={item.id}
							href={`#${item.id}`}
							className={`px-4 py-2 rounded-md transition-colors duration-200 ${
								selectedItem === item.id
									? 'bg-indigo-600 text-white'
									: 'text-gray-600 hover:bg-indigo-600 hover:text-white'
								}`}
								>{item.label}</a>
							))}
					</div>
				</div>

				{/* Mobile menu */}
				<AnimatePresence>
				{isOpen && (
					<motion.div
					initial={{ height: 0, opacity: 0 }}
					animate={{ height: "auto", opacity: 1 }}
					exit={{ height: 0, opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="md:hidden overflow-hidden"
					>
					<div className="flex flex-col space-y-2 pb-4">
						{menuItems.map((item, index) => (
							<a
							key={item.id}
							href={`#${item.id}`}
							className={`px-4 py-2 rounded-md transition-colors duration-200 ${
								selectedItem === item.id
									? 'bg-indigo-600 text-white'
									: 'text-gray-600 hover:bg-indigo-600 hover:text-white'
								}`}
								>{item.label}
							</a>
						))}
					</div>
					</motion.div>
				)}
				</AnimatePresence>
			</div>
		</nav>





	{/* <nav className="bg-green-100 px-8 py-8 sm:pt-6 sm:pb-4 pb-5 mx-auto max-w-screen-xl lg:px-12 lg:py-12">
      <div>
        <ul className="flex space-x-12 justify-center">
          <li>
            <NavLink to="#login" className={({ isActive }) => 
                [
                  "text-black",
                  isActive ? "font-bold text-red-600" : null
                ].filter(Boolean).join(" ")
              }>Home
			  </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => 
                [
                  "text-black",
                  isActive ? "font-bold text-red-600" : null
                ].filter(Boolean).join(" ")
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => 
                [
                  "text-black",
                  isActive ? "font-bold text-red-600" : null
                ].filter(Boolean).join(" ")
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav> */}

    </>
  );
};

export default Navbar;