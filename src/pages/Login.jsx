import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const Login = () => {
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Login submitted", { email, password, rememberMe });
	};

	return (
		<>
			<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
				<div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
					<div className="w-full md:w-1/2 h-48 md:h-auto">
						<img
							src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
							alt="Delicious Food"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="w-full md:w-1/2 p-8">
						<form onSubmit={handleSubmit} className="space-y-6">
							<h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 ">
								Iniciar sesión
							</h2>

							<p className=" text-center text-sm mt-4 text-gray-800 mb-6 md:mb-8">
								Ya tienes una cuenta{" "}
								<Link
									className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap "
									to="/registrar"
								>
									Ingresa aquí
								</Link>
							</p>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Correo electrónico
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<span className="icon-envelope w-[18px] h-[18px] absolute content-center  text-gray-400"></span>
									</div>
									<input
										type="email"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
										placeholder="tu@ejemplo.com"
										required
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									Contraseña
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										{/* <Lock className="h-5 w-5 text-gray-400" /> */}
									</div>
									<input
										type="password"
										id="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
										placeholder="••••••••"
										required
									/>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
								<div className="flex items-center">
									<input
										id="remember-me"
										type="checkbox"
										checked={rememberMe}
										onChange={(e) => setRememberMe(e.target.checked)}
										className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-gray-900"
									>
										Recordar mis datos
									</label>
								</div>
								<div className="text-sm">
									<Link
										to="./src/pages/auth/OlvidePassword"
										className="font-medium text-indigo-600 hover:text-indigo-500"
									>
										Menú
									</Link>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm md:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									{/* <User className="h-5 w-5 mr-2" /> */}
									Iniciar sesión
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
