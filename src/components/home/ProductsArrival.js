import { Link } from "react-router-dom";
import Cart from "components/cart/cart";

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
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {/* CART */}
          <Cart data={data}/>
        </div>
        <div className="mt-6">
          <Link
            to="/shop"
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
