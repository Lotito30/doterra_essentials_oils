import { Link } from "react-router-dom";

const SearchBox = ({ categories, search, onSubmit, onChange}) => {

  return (
    <form onSubmit={e => onSubmit(e)} className="gap-1 flex absolute top-14 right-0">
      <select
        onChange={(e) => onChange(e)}
        name="category_id"
        className="rounded-md focus:outline-none focus:ring-0 w-20"
        
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
        onChange={e => onChange(e)}
        value={search}
        required
        placeholder="Search for..."
        className=" w-40 lg:w-56 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm focus:outline-none focus:ring-0 focus:border-orange-standard focus:border-2"
      />

      <span className=" absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button
          type="submit"
          className="text-gray-600 hover:text-gray-700"
        >
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
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
