import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
	const [usuarios, setUsuarios] = useState([]);
	const [usuario, setUsuario] = useState({});

	useEffect(() => {
		const getUsuarios = async () => {
			try {
				const config = {
					headers: {
						"Content-Type": "application/json",
					},
				};
				const { data } = await clienteAxios("/usuarios", config);
				setUsuarios(data);
			} catch (error) {
				console.log(error);
			}
		};
		getUsuarios();
	}, []);

	return (
		<UsuariosContext.Provider value={{ usuarios, setUsuarios }}>
			{children}
		</UsuariosContext.Provider>
	);
};

export default PacientesContext;
