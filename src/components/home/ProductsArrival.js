import { Link } from "react-router-dom";
import Card from "components/card/CardShop";

function ProductsArrival({ data }) {
  return (
    <>
      
      <div className="max-w-2xl mx-auto py-8 px-4 lg:max-w-7xl lg:px-8">
        <header className="pt-4">
          <h2 className="font-bold text-gray-900 text-4xl">New Arrivals</h2>

          <p className="mt-4 max-w-xl text-gray-700">
            Explore the latest in our natural oil collection. Freshly curated,
            high-quality products await. Discover your new favorite today.
          </p>
        </header>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {/* CARD */}
          {data && data.map((product) => (<Card key={product.id} data={product}/>))}
        </div>
        <div className="mt-6">
          <Link
            to="/shop"
            className="inline-block text-sm font-semibold text-orange-standard hover:text-orange-standard"
          >
            See more products<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductsArrival;
