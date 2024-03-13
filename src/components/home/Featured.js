import { Link } from "react-router-dom";

function Featured() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="inline-block px-3 mb-4 text-xs font-semibold tracking-wider text-orange-standard uppercase bg-teal-accent-400">
            Essential doTERRA
          </p>
          <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto text-center">
            Discover the essential oils in our collection
          </h2>
        </header>
        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <Link to="/shop" className="group relative block">
              <img
                src="https://doterra-aws-back-s3.s3.eu-central-1.amazonaws.com/images/doterraFeatured.jpeg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-bold text-black">Personal Care</h3>

                <span className="mt-1.5 rounded-md inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/shop" className="group relative block">
              <img
                src="https://doterra-aws-back-s3.s3.eu-central-1.amazonaws.com/images/doterraFeatured1.jpeg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-bold text-black">Kits</h3>

                <span className="mt-1.5 rounded-md inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Link to="/shop" className="group relative block">
              <img
                src="https://doterra-aws-back-s3.s3.eu-central-1.amazonaws.com/images/doterraFeatured2.jpeg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-bold text-black">Essential oils</h3>

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
export default Featured;
