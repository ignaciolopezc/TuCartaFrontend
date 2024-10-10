import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

import logoDark from "../assets/images/logo-dark.png"
// import logoLight from "../assets/images/logo-light.png"


const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [lastScrollY, setLastScrollY] = useState(0)
	const [isVisible, setIsVisible] = useState(true)
	const controls = useAnimation()

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 	const currentScrollY = window.scrollY
	// 	const isMobile = window.innerWidth < 640 // 'sm' breakpoint in Tailwind

	// 	if (isMobile) {
	// 		if (currentScrollY > lastScrollY) {
	// 		setIsVisible(false)
	// 		} else {
	// 		setIsVisible(true)
	// 		}
	// 	} else {
	// 		setIsVisible(true)
	// 	}

	// 	setLastScrollY(currentScrollY)
	// 	}
	// 	window.addEventListener('scroll', handleScroll, { passive: true })
	// 	return () => window.removeEventListener('scroll', handleScroll)
	// }, [lastScrollY]);

	// useEffect(() => {
	// 	if (isVisible) {
	// 	controls.start({ y: 0, opacity: 1 })
	// 	} else {
	// 	controls.start({ y: -100, opacity: 0 })
	// 	}
	// }, [isVisible, controls]);


  return (
    <>
	{/* <motion.nav
      className="bg-white shadow-md fixed top-0 left-0 right-0 z-50"
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl text-indigo-600">Logo</span>
          </div>
          <div className="flex items-center space-x-4">
			
            <AnimatePresence>
				{isOpen && (
				<motion.div 
					className="sm:hidden"
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 'auto' }}
					exit={{ opacity: 0, height: 0 }}
					transition={{ duration: 0.3 }}
				>
					<div className="pt-2 pb-3 space-y-1">
					<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
					<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contacto</a>
					<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Login</a>
					<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Registro</a>
					<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Menu</a>
					</div>
				</motion.div>
				)}
			</AnimatePresence>

          </div>
        </div>
      </div>
    </motion.nav> */}




	<motion.nav
      className="bg-white shadow-md fixed top-0 left-0 right-0 z-50"
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
	<nav className="bg-white shadow-lg">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="flex justify-between h-16">
			<div className="flex-shrink-0 flex items-center">
				<a className="logo" href="/">
					<img src={logoDark} className="l-dark" height="24" alt=""/>
				</a>
			</div>
			<div className="hidden sm:ml-6 sm:flex sm:items-center">
				<a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
				<a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contacto</a>
				<a href="#login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Login</a>
				<a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Registro</a>
				<a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Menu</a>
			</div>
			<div className="-mr-2 flex items-center sm:hidden">
				<button
				onClick={() => setIsOpen(!isOpen)}
				className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
				>
				<span className="sr-only">Abrir menu principal</span>
				<motion.div
					animate={isOpen ? "open" : "closed"}
					variants={{
					open: { rotate: 45 },
					closed: { rotate: 0 }
					}}
					transition={{ duration: 0.2 }}
					style={{ originY: 0.55 }}
				>
					<motion.div
					variants={{
						open: { rotate: 90 },
						closed: { rotate: 0 }
					}}
					>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					</motion.div>
				</motion.div>
				</button>
			</div>
			</div>
		</div>
		

		<AnimatePresence>
			{isOpen && (
			<motion.div 
				className="sm:hidden"
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: 1, height: 'auto' }}
				exit={{ opacity: 0, height: 0 }}
				transition={{ duration: 0.3 }}
			>
				<div className="pt-2 pb-3 space-y-1">
				<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
				<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contacto</a>
				<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Login</a>
				<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Registro</a>
				<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Menu</a>
				</div>
			</motion.div>
			)}
		</AnimatePresence>
	</nav>
	</motion.nav>




    </>
  );
};

export default Navbar;