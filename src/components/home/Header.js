import headerImg from "assets/img/error404.webp";
import iconoWhatsapp from "assets/img/iconoWhatsapp.png";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Header({isAuthenticated, user}) {
  return (
    <main>
      {/* {isAuthenticated 
      ? 
      <>
      <p>ID User: {
        user &&
        user !== null &&
        user !== undefined && 
        user.id
        }</p> 
      <p>Name User: {
        user &&
        user !== null &&
        user !== undefined && 
        user.get_full_name
        }</p> 
        </>
      
      :
      <p className="hidden"></p>
    }
       */}
      <div class="px-4 mx-auto max-w-7xl pt-10 lg:pt-5 sm:px-6 md:px-12 lg:px-16 lg:pb-8 relative">
        <Link to="/products">
          <img
            class="fixed bottom-5 right-2 w-30 h-20 z-10"
            alt="Oils"
            src={iconoWhatsapp}
          />
        </Link>
        <div class="flex flex-wrap items-center mx-auto max-w-7xl flex-col-reverse lg:flex-row">
          <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl flex md:justify-center" >
            <div>
              <div class="relative w-full max-w-lg">
                <div class="relative">
                  <img
                    class="hidden object-cover object-center mx-auto rounded-lg shadow-2xl lg:block"
                    alt="Oils"
                    src={headerImg}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span class="mb-8 text-xs font-bold tracking-widest text-black uppercase">
              {" "}
              Pure Essence{" "}
            </span>
            <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              Experience the Power of doTERRA.
            </h1>
            <span class="mb-8 text-4xl font-bold leading-none tracking-tighter text-orange-600 md:text-7xl lg:text-5xl">
              <Typewriter
                words={[
                  "Purifying",
                  "Revitalizing",
                  "Relaxing",
                  "Balancing",
                  "Strengthening",
                  "Rejuvenating",
                  "Harmonizing",
                  "Energizing",
                  "Nourishing",
                  "Protecting",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            <p class="mb-8 text-base leading-relaxed text-left text-gray-500">
              Unleash the potential of pure, potent doTERRA essential oils. Your
              wellness journey starts here.
            </p>
            <div class="mt-0 lg:mt-6 max-w-7xl flex gap-1 items-center">
              <div class="mt-3 rounded-md sm:mt-0">
                <Link
                  to="/shop"
                  class="items-center block px-10 py-4 text-base font-medium text-center text-white transform hover:bg-black transition duration-300 ease-in-out bg-orange-standard rounded-md focus:outline-none focus:ring-offset-2 focus:ring-0"
                >
                  Get products
                </Link>
              </div>
              <div class="mt-3 rounded-md sm:mt-0 sm:ml-3">
                <Link
                  to="/contact"
                  class="items-center block px-10 py-4 text-base font-medium text-center text-black transition duration-300 ease-in-out transform border-2 border-gray-100 hover:bg-gray-200 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Header;
