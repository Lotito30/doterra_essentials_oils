import GetSrcPhoto from "components/photo/GetSrcPhoto";
import { Link } from "react-router-dom";

function SearchContent({ search_products, onSubmit }) {
  return (
    search_products &&
    search_products.length > 0 &&
    search_products !== null &&
    search_products !== undefined &&
    search_products.map((product, index) => {
      let srcPhoto = GetSrcPhoto(product.photo);
      return (
        <Link
          onClick={() => onSubmit(product.name, 0)}
          key={index}
          to={`/product/${product.id}`}
        >
          <div className="flex items-center justify-between px-2 overflow-x-hidden gap-2 ">
            <img
              src={srcPhoto}
              alt="Products"
              className="size-16 rounded object-cover aspect-w-1"
            />
            <div>
              <h3 class="text-md text-gray-900 flex-shrink">{product.name}</h3>
            </div>
          </div>
        </Link>
      );
    })
  );
}

export default SearchContent;
