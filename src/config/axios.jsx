import axios from "axios";

// LA VARIABLE VITE_BACKEND_URL ES OBTENIDA DEL .ENV
// PARA PROYECTOS VITE DEBE INICIAR CON "VITE_NOMBRE_VARIABLE"

const clienteAxios = axios.create({
	baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
});

export default clienteAxios;
