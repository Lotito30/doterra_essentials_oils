import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLogoWhatsapp } from "react-icons/io";
function Header() {
  const home =
    "https://doterra-aws-back-s3.s3.eu-central-1.amazonaws.com/images/doterraSliderHome.jpeg";
  const home1 =
    "https://doterra-aws-back-s3.s3.eu-central-1.amazonaws.com/images/doterraSliderHome1.jpeg";
  const home3 =
    "https://doterra-aws-back-s3.s3.eu-central-1.amazonaws.com/images/doterraSliderHome3.jpeg";
  const imgCarrusel = [home, home1, home3];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <main>
      <div class="px-4 mx-auto max-w-7xl pt-10 lg:pt-5 sm:px-6 md:px-12 lg:px-16 lg:pb-8 relative">
        <a
          className="fixed bottom-5 right-2 w-30 h-20 z-10 cursor-pointer "
          href="https://wa.me/971554693255?text=Hello!%20I'm%20reaching%20out%20from%20the%20doTERRA%20website%20and%20I%20have%20a%20query.%20Can%20you%20please%20assist%20me?%20Thank%20you!"
          target="_blank"
        >
          <IoLogoWhatsapp
            size={50}
            color="#25D366"
          />
        </a>
        <div class="flex flex-wrap items-center mx-auto max-w-7xl flex-col-reverse lg:flex-row">
          <div class="w-full lg:max-w-lg lg:w-1/2 hidden lg:inline-block">
            <Slider {...settings}>
              {imgCarrusel.map((img, index) => {
                return (
                  <div key={index}>
                    <img class="w-full h-96 border-none" alt="Oils" src={img} />
                  </div>
                );
              })}
            </Slider>
          </div>

          <div class="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span class="mb-4 text-xs font-bold tracking-widest text-black uppercase">
              {" "}
              Pure Essence{" "}
            </span>
            <h1 class="mb-4 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              Experience the Power of doTERRA.
            </h1>
            <span class="mb-4 text-4xl font-bold leading-none tracking-tighter text-orange-600 md:text-7xl lg:text-5xl">
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
            <p class="mb-4 text-base leading-relaxed text-left text-gray-500">
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
                  class="items-center block px-10 py-4 text-base font-medium text-center text-black transition duration-300 ease-in-out transform border-2 border-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
