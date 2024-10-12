import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Registrar from "../pages/Registrar";

function AuthLayout() {
  return (
	<>
		<div className="font-nunito text-base text-black ">
			<Navbar />
			<Registrar />
			<Login />
			<Contacto />
			<Home />
			<Footer />
		</div>
    </>
  );
}

export default AuthLayout;
