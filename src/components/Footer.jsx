const Footer = () => {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">    
        <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container relative text-center">
                <div className="grid md:grid-cols-2 items-center">

                    <div className="md:text-start text-center px-6 mt-6 md:mt-0">
                        <p className="mb-0">© <script>document.write(new Date().getFullYear())</script> Tu Menú digital. inpulsado por <a href="https://hexagondigital.cl/" target="_blank" className="text-reset">Hexagon digital</a>.</p>
                    </div>

                    <div className="md:text-end text-center mt-6 md:mt-0">
                        <p className="mb-0">© Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>


  );
};

export default Footer;
