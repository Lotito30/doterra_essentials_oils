import CartProducts from "components/cart/cartProductsMap";
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
        <CartProducts data={data}/>
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

export default ProductsSold;
