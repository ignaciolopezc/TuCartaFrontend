import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Registrar from "../pages/Registrar";
import Menu from "../pages/Menu";
import Alerta from "../components/Alerta";
import Modal from "../pages/Modal";
function AuthLayout() {
  return (
	<>
	<section><Modal /></section>
	{/* <section><Navbar /></section> */}
	{/* <section><Menu /></section> */}
	{/* <section><Alerta /></section> */}
	<section>demo manu digital</section>
	<section>tamplates</section>
	<section>caracteristicas</section>
	<section>precio</section>
	<section>servicios</section>
	<section>reservas</section>
	<section>eventos</section>
	<section>personalizacion de menu</section>
	<section>fotografia (link a personas)</section>
	<section>team</section>
	<section>contacto</section>
	<footer>pie de pagina</footer>

	<div>
      	{/* 
		<Menu />
		<Registrar />
		<Login />
		<Contacto />
		<Home />
		<Footer /> */}
    </div>


		{/* <div className="font-nunito text-base text-black ">
			
		</div> */}
    </>
  );
}

export default AuthLayout;



