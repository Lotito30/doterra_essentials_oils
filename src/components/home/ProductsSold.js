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

export default ProductsSold;
