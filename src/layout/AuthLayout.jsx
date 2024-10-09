import { Link } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function AuthLayout() {
  return (
	<main className="bg-dark">
      <div>auth layout</div>
      <NavBar />
      <Outlet />
      <Footer />
	</main>
  );
}

export default AuthLayout;
