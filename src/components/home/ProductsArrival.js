import fondoHome3 from "assets/img/fondoHome3.webp";
import fondoHome4 from "assets/img/fondoHome4.webp";
import fondoHome from "assets/img/fondoHome.jpg";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];
function ProductsArrival({ data }) {
  return (
    <div>
      <section>
        <div className="max-w-xl md:mx-auto sm:text-center px-6 lg:max-w-2xl text-center py-8">
          <div>
            <p className="inline-block px-3 mb-4 text-xs font-semibold tracking-wider text-orange-standard uppercase rounded-full bg-teal-accent-400">
              New Arrivals
            </p>
          </div>
          <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto text-center">
            Discover the latest essential oils in our collection
          </h2>
        </div>
      </section>
      <div className="max-w-2xl mx-auto py-10 px-4 lg:max-w-7xl lg:px-8">
        <header className="pt-4">
          <h2 className="font-bold text-gray-900 text-4xl">New Arrivals</h2>

          <p className="mt-4 max-w-xl text-gray-700">
            Explore the latest in our natural oil collection. Freshly curated,
            high-quality products await. Discover your new favorite today.
          </p>
        </header>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data &&
            data !== null &&
            data !== undefined &&
            data.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.get_thumbnail}
                    alt=""
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-1 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 text-title capitalize">
                      <Link to={`/product/${product.id}`}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 "
                        />
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-6">
          <Link
            to="#"
            className="block text-sm font-semibold text-orange-standard hover:text-orange-standard"
          >
            See more products<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsArrival;
