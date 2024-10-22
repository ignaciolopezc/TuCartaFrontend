import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
// import RutaProtegida from "./layout/RutaProtegida";


import Home from "./pages/Home";
// import Login from "./pages/auth/Login";
// import Registrar from "./pages/auth/Registrar";
// import OlvidePassword from "./pages/OlvidePassword";
// import ConfirmarCuenta from "./pages/ConfirmarCuenta";
// import NuevoPassword from "./pages/NuevoPassword";
// import AdministrarPacientes from "./pages/AdministrarPacientes";
// import EditarPerfil from "./pages/EditarPerfil";
// import CambiarPassword from "./pages/CambiarPassword";

// import { AuthProvider } from "./context/AuthProvider";
// import { PacientesProvider } from "./context/PacientesProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="registrar" element={<Registrar />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="olvide-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} /> */}
        </Route>

        {/* <Route path="/admin" element={<RutaProtegida />}>
					<Route index element={<AdministrarPacientes />} />
					<Route path="perfil" element={<EditarPerfil />} />
					<Route path="cambiar-password" element={<CambiarPassword />} />
				</Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
