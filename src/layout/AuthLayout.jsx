import Navbar from "../components/Navbar";


import Footer from "../components/Footer";
import Login from "../pages/Login";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Registrar from "../pages/Registrar";

function AuthLayout() {
  return (
	<>
	<div className="min-h-screen bg-gray-50">
      	<Navbar />
		<Registrar />
		<Login />
		<Contacto />
		<Home />
		<Footer />
    </div>


		{/* <div className="font-nunito text-base text-black ">
			
		</div> */}
    </>
  );
}

export default AuthLayout;
