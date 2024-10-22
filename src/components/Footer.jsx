import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-4">Logo</div>
            <div className="flex space-x-4">
              <motion.a href="#" className="hover:text-indigo-400" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>📘</motion.a>
              <motion.a href="#" className="hover:text-indigo-400" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>🐦</motion.a>
              <motion.a href="#" className="hover:text-indigo-400" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>📷</motion.a>
              <motion.a href="#" className="hover:text-indigo-400" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>💼</motion.a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>Contacto</motion.a></li>
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>Politica de privacidad</motion.a></li>
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>Condiciones de uso</motion.a></li>
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>Terminos y condiciones de uso</motion.a></li>
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>Quiénes Somos</motion.a></li>
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>Caracteristicas </motion.a></li>
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>Login</motion.a></li>
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>Resgistro</motion.a></li>
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>Demo</motion.a></li>
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>precios</motion.a></li>
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>preguntas frecuentes</motion.a></li>
              
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Más</h3>
            <ul className="space-y-2">
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>Widget</motion.a></li>
              <li><motion.a href="#" className="hover:text-indigo-400" whileHover={{ x: 5 }}>Proyectos</motion.a></li>
            </ul>
          </div>
        </div>
        <motion.div 
          className="mt-8 border-t border-gray-700 pt-8 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
