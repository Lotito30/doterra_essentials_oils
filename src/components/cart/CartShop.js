import { Link } from "react-router-dom";

function CartShop({ data }) {
  return (
    <div className="grid grid-cols-1">
      <div key={data.id} className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={data.get_thumbnail}
            alt=""
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-1 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 text-title capitalize">
              <Link to={`/product/${data.id}`}>
                <span aria-hidden="true" className="absolute inset-0 " />
                {data.name}
              </Link>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">${data.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CartShop;
