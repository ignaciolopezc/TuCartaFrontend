import imagen from "../assets/images/food/1.jpg"

const Home = () => {
  return (
    <section id="menu">
      <h1>menu</h1>
        <div className="container relative mt-8">   
          <div id="grid" className="md:flex justify-center">
              <div className="group lg:w-1/5 md:w-1/3 picture-item p-3 mt-6" data-groups='["break"]'>
                  <img src={imagen} className="rounded-full size-32 mx-auto group-hover:animate-[spin_10s_linear_infinite]" alt=""/>

                  <div className="mt-4 text-center">
                      <a href="" className="text-lg font-medium block hover:text-indigo-600 duration-500">Black bean dip</a>
                      <span className="text-slate-400 mt-2 block">A reader will be distracted by the readable</span>

                      <h5 className="text-indigo-600 font-medium mt-4">$25.00</h5>
                  </div>
              </div>
          </div>
        </div>
    </section>
  );
};

export default Home;
