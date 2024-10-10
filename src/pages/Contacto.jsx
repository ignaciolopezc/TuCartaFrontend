import ab01 from "../assets/images/about/ab01.jpg"
import ab02 from "../assets/images/about/ab02.jpg"
import ab03 from "../assets/images/about/ab03.jpg"

const Contacto = () => {

    return (
    <>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <img src={ab03} className="shadow rounded-md" alt=""/>
                                    <img src={ab02} className="shadow rounded-md" alt=""/>
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <img src={ab01} className="shadow rounded-md" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="flex mb-4">
                                <span className="text-indigo-600 text-2xl font-bold mb-0">
                                    <span className="counter-value text-6xl font-bold" data-target="15">1</span>+</span>
                                <span className="self-end font-medium ms-2">Years <br/> Experience</span>
                            </div>

                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Who we are ?</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>
                        
                            <div className="mt-6">
                                <a href="contact-one.html" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><i className="uil uil-envelope"></i> Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container relative mt-8">
                <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                    <div className="mx-auto mt-8">
                        <img src="../assets/images/client/amazon.svg" className="h-6" alt=""/>
                    </div>

                    <div className="mx-auto mt-8">
                        <img src="assets/images/client/google.svg" className="h-6" alt=""/>
                    </div>
                    
                    <div className="mx-auto mt-8">
                        <img src="assets/images/client/lenovo.svg" className="h-6" alt=""/>
                    </div>
                    
                    <div className="mx-auto mt-8">
                        <img src="assets/images/client/paypal.svg" className="h-6" alt=""/>
                    </div>
                    
                    <div className="mx-auto mt-8">
                        <img src="assets/images/client/shopify.svg" className="h-6" alt=""/>
                    </div>
                    
                    <div className="mx-auto mt-8">
                        <img src="assets/images/client/spotify.svg" className="h-6" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Contacto