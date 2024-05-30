import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { SearchContext } from "./SearchContext";
// import GetSrcPhoto from "components/photo/GetSrcPhoto";
import { Link } from "react-router-dom";

const SearchBox = ({
  search,
  onSubmit,
  onChange,
  handleSearchCLick,
  inputRef,
  handleSubmitSearch,
  search_products,
}) => {
  const { searchClick } = useContext(SearchContext);

  return (
    <>
      <form
        onSubmit={(e) => handleSubmitSearch(e)}
        className={`${searchClick ? "w-full" : "hidden"} `}
      >
        <XIcon
          className="w-6 h-6 cursor-pointer absolute -left-7 top-2"
          onClick={handleSearchCLick}
        />

        <div>
          <input
            ref={inputRef}
            type="search"
            name="search"
            onChange={(e) => onChange(e)}
            value={search}
            autoComplete="off"
            placeholder="Search for..."
            className="w-72 sm:w-80 md:w-96 border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm focus:outline-none focus:ring-0 focus:border-gray-200 focus:border-2"
          />
          <div
            className={`${
              searchClick && search_products?.length > 0
                ? "w-72 sm:w-80 md:w-96 absolute left-0 top-9 z-10 bg-white border h-auto max-h-52 overflow-y-auto"
                : "hidden"
            }`}
          >
            {search_products?.length > 0 &&
              search_products.map((product, index) => (
                <Link
                  onClick={() => onSubmit(product.name, 0)}
                  key={index}
                  to={`/product/${product.id}`}
                  className="hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4 hover:bg-gray-100 px-4 py-2">
                    <SearchIcon className="h-5 w-5" />
                    <div>
                      <h3 class="text-md text-gray-900 flex-shrink">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </form>
      <span className="grid place-content-center ">
        <button
          type="button"
          onClick={handleSearchCLick}
          className={` ${
            searchClick ? "hidden" : "text-gray-600 hover:text-gray-700 block"
          }`}
        >
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </>
  );
};

export default SearchBox;
