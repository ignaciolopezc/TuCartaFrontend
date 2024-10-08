import { useState, Link } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

function AuthLayout() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className="bg-white shadow-lg">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex-shrink-0 flex items-center">
							{/* Puedes agregar tu logo aquí */}
							<span className="text-xl font-bold">Logo</span>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:items-center">
							<a
								href="#"
								className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>
								Home
							</a>
							<a
								href="#"
								className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>
								Contacto
							</a>
							<a
								href="#"
								className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>
								Login
							</a>
							<a
								href="#"
								className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>
								Registro
							</a>
							<a
								href="#"
								className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>
								Menu
							</a>
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
										closed: { rotate: 0 },
									}}
									transition={{ duration: 0.2 }}
									style={{ originY: 0.55 }}
								>
									<motion.div
										variants={{
											open: { rotate: 90 },
											closed: { rotate: 0 },
										}}
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4 6H20M4 12H20M4 18H20"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
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
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
						>
							<div className="pt-2 pb-3 space-y-1">
								<a
									href="#"
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>
									Home
								</a>
								<a
									href="#"
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>
									Contacto
								</a>
								<a
									href="#"
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>
									Login
								</a>
								<a
									href="#"
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>
									Registro
								</a>
								<a
									href="#"
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>
									Menu
								</a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
			<Outlet />
		</>
	);
}

export default AuthLayout;
