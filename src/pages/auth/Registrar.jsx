import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../../components/common/Alerta";
import clienteAxios from "../../config/axios";

const Registrar = () => {
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [alerta, setAlerta] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ([nombre, email, password].includes("")) {
			setAlerta({ msg: "Hay campos vacios", error: true });
			return;
		}

		if (password.length < 6) {
			setAlerta({
				msg: "El Password es muy corto, agrega minimo 6 caracteres",
				error: true,
			});
			return;
		}

		setAlerta({});

		// Crear el usuario en la api
		try {
			await clienteAxios.post("/usuarios", { nombre, email, password });
			setAlerta({
				msg: "Creado Correctamente, revisa tu email",
				error: false,
			});
		} catch (error) {
			setAlerta({
				msg: error.response.data.msg,
				error: true,
			});
		}
	};

	const { msg } = alerta;

	return (
		<>
			<section className="min-h-screen flex flex-col items-center justify-center">
				<div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md border-solid, border-2 border-gray-900">
					<div className=" w-full px-20 py-4 items-center justify-center">
						{msg && <Alerta alerta={alerta} />}
						<form onSubmit={handleSubmit}>
							<div className="mb-12">
								<h3 className="text-gray-800 text-3xl font-extrabold">
									Registra tu cuenta
								</h3>
								<p className="text-sm mt-4 text-gray-800">
									Ya tienes una cuenta{" "}
									<Link
										className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
										to="/"
									>
										Ingresa aquí
									</Link>
								</p>
							</div>

							<div>
								<div className="relative flex items-center">
									<input
										name="nombre"
										type="text"
										required
										className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
										placeholder="Nombre"
										value={nombre}
										onChange={(e) => setNombre(e.target.value)}
									/>
									<span className="icon-user w-[18px] h-[18px] absolute right-2 text-gray-400"></span>
								</div>
							</div>

							<div className="mt-8">
								<div className="relative flex items-center">
									<input
										name="email"
										type="text"
										required
										className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
										placeholder="Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									<span className="icon-user w-[18px] h-[18px] absolute right-2 text-gray-400"></span>
								</div>
							</div>

							<div className="mt-8">
								<div className="relative flex items-center">
									<input
										name="password"
										type="password"
										required
										className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
										placeholder="Contraseña"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<span className="icon-user w-[18px] h-[18px] absolute right-2 text-gray-400"></span>
								</div>
							</div>

							<div className="flex flex-wrap items-center justify-between gap-4 mt-6">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
									/>
									<label className="ml-3 block text-sm text-gray-800">
										Recuerda me
									</label>
								</div>
								<div>
									<Link
										className="text-blue-600 font-semibold text-sm hover:underline"
										to="/olvide-password"
									>
										Olvide mi contraseña?
									</Link>
								</div>
							</div>

							<div className="mt-12">
								<button
									type="submit"
									value="Registrame"
									className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
								>
									Registrame
								</button>
							</div>
						</form>
					</div>

					<div className="">
						<img
							src="./src/assets/images/food/8.jpg"
							alt=""
							className="w-full"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Registrar;
