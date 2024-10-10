import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";

function AuthLayout() {
  return (
	<>
		<div className="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
			<Navbar />
			<Contacto />
			<Home />
			<Login />
			<Footer />
		</div>
    </>
  );
}

export default AuthLayout;
