import fondoHome3 from "assets/img/fondoHome3.webp";
import fondoHome4 from "assets/img/fondoHome4.webp";
import fondoHome from "assets/img/fondoHome.jpg";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="font-bold text-gray-900 text-4xl">
            doTERRA's oils
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
          Dive into the world of doTERRA with our featured articles. Enjoy the richness of our products and explore more. Your journey to wellness starts here.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <Link to="/products" className="group relative block">
              <img
                src={fondoHome}
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Casual Trainers
                </h3>

                <span className="mt-1.5 rounded-md inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/products" className="group relative block">
              <img
                src={fondoHome3}
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Winter Jumpers
                </h3>

                <span className="mt-1.5 rounded-md inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Link to="/products" className="group relative block">
              <img
                src={fondoHome4}
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Skinny Jeans Blue
                </h3>

                <span className="mt-1.5 rounded-md inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Featured 