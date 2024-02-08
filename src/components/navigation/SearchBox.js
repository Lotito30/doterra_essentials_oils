import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { XIcon } from "@heroicons/react/solid";

const SearchBox = ({
  categories,
  search,
  onSubmit,
  onChange,
  handleSearchCLick,
}) => {
  const { searchClick, setSearchClick } = useContext(SearchContext);

  return (
    <form onSubmit={(e) => onSubmit(e)} className="gap-1 flex">
      <div className={`${searchClick ? "absolute top-14 right-0 flex flex-row-reverse gap-1 items-center md:flex-row md:static" : "hidden"} `}>
        <XIcon
          className="w-6 h-6 cursor-pointer"
          onClick={() => setSearchClick(false)}
        />
        <select
          onChange={(e) => onChange(e)}
          name="category_id"
          className=" rounded-md w-20 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-none "
        >
          <option value={0}>All</option>
          {categories &&
            categories !== null &&
            categories !== undefined &&
            categories.map((category, index) => (
              <option key={index} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
        {/* SEARCH */}
        <label htmlFor="Search" className="sr-only">
          {" "}
          Search{" "}
        </label>

        <input
          type="search"
          name="search"
          onChange={(e) => onChange(e)}
          value={search}
          required
          placeholder="Search for..."
          className="lg:w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm focus:outline-none focus:ring-0 focus:border-orange-standard focus:border-2"
        />
      </div>
      <span className="grid place-content-center ">
        <button
          type={searchClick ? "submit" : ""}
          onClick={handleSearchCLick}
          className="text-gray-600 hover:text-gray-700"
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
    </form>
  );
};

export default SearchBox;
