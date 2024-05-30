import Card from "components/card/CardShop";
import { Link } from "react-router-dom";

function ProductsSold({ data }) {
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-2xl py-10 px-4 lg:max-w-7xl lg:px-8">
        <header className="pt-4">
          <h2 className="font-bold text-gray-900 text-4xl">Best Seller</h2>

          <p className="mt-4 max-w-xl text-gray-700">
            Dive into our Best Sellers. These popular natural oils have won over
            our customers. Experience their charm and make them yours.
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
    </div>
  );
}

export default ProductsSold;
