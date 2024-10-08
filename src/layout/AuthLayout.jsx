import { useState, Link } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet, Navigate } from "react-router-dom";

import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";

function AuthLayout() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}

export default AuthLayout;
