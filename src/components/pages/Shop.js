import Layout from "hocs/layouts/Layout";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Cart from "components/cart/cart";
import { prices } from "helpers/fixedPrices";
import Button from "components/button/Button";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Get_Products({
  categories,
  products,
  showProducts,
  onSubmit,
  onChange,
  sortBy,
  order,
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* MOBILE FILTERS */}
                <form
                  onSubmit={(e) => onSubmit(e)}
                  className="mt-4 border-t border-gray-200"
                >
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="font-medium text-gray-900 px-2 py-3"
                  >
                    {/* {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))} */}
                    CATEGORIES
                    {categories &&
                      categories !== null &&
                      categories !== undefined &&
                      // MAPEAR LAS CATEGORIAS
                      categories.map((category) => {
                        if (category.sub_categories.length === 0) {
                          return (
                            <div
                              key={category.id}
                              className="flex items-center h-5 my-5"
                            >
                              <input
                                name="category_id"
                                onChange={(e) => onChange(e)}
                                value={category.id.toString()}
                                type="radio"
                                className="h-4 w-4 text-orange-standard border-gray-300 rounded-full focus:ring-0"
                              />
                              <label className="ml-3 min-w-0 flex-1 text-neutral-600">
                                {category.name}
                              </label>
                            </div>
                          );
                        } else {
                          let result = [];
                          result.push(
                            <div
                              key={category.id}
                              className="flex items-center h-5 my-5"
                            >
                              <input
                                name="category_id"
                                onChange={(e) => onChange(e)}
                                value={category.id.toString()}
                                type="radio"
                                className="h-4 w-4 text-orange-standard border-gray-300 rounded-full focus:ring-0"
                              />
                              <label className="ml-3 min-w-0 flex-1 text-neutral-600">
                                {category.name}
                              </label>
                            </div>
                          );

                          category.sub_categories.map((sub_category) => {
                            result.push(
                              <div
                                key={sub_category.id}
                                className="flex items-center h-5 my-5"
                              >
                                <input
                                  name="category_id"
                                  onChange={(e) => onChange(e)}
                                  value={sub_category.id.toString()}
                                  type="radio"
                                  className="h-4 w-4 text-orange-standard border-gray-300 rounded-full focus:ring-0"
                                />
                                <label className="ml-3 min-w-0 flex-1 text-neutral-600">
                                  {sub_category.name}
                                </label>
                              </div>
                            );
                          });

                          return result;
                        }
                      })}
                  </ul>
                  {/* PRICES  */}
                  <Disclosure
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span
                              className={classNames(
                                open ? "text-orange-standard" : "text-gray-900",
                                "font-medium text-gray-900"
                              )}
                            >
                              Prices
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon
                                  className="h-5 w-5 text-orange-standard group-hover:text-orange-standard"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmIcon
                                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {prices &&
                              prices.map((price, index) => {
                                if (price.id === 0) {
                                  return (
                                    <div key={index} className="form-check">
                                      <input
                                        name="price_range"
                                        onChange={(e) => onChange(e)}
                                        value={price.name}
                                        type="radio"
                                        defaultChecked
                                        className="h-4 w-4 border-gray-300 text-orange-standard focus:ring-0"
                                      />
                                      <label
                                        htmlFor="price_range"
                                        className="ml-3 text-sm text-gray-600"
                                      >
                                        {price.name}
                                      </label>
                                    </div>
                                  );
                                } else {
                                  return (
                                    <div key={index} className="form-check">
                                      <input
                                        name="price_range"
                                        onChange={(e) => onChange(e)}
                                        value={price.name}
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-orange-standard focus:ring-0"
                                      />
                                      <label
                                        htmlFor="price_range"
                                        className="ml-3 text-sm text-gray-600"
                                      >
                                        {price.name}
                                      </label>
                                    </div>
                                  );
                                }
                              })}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  {/* SORTBY */}
                  <Disclosure
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span
                              className={classNames(
                                open ? "text-orange-standard" : "text-gray-900",
                                "font-medium text-gray-900"
                              )}
                            >
                              Sort By
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon
                                  className="h-5 w-5 text-orange-standard group-hover:text-orange-standard"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmIcon
                                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            <div>
                              <label
                                htmlFor="sortBy"
                                className="mr-3 min-w-0 flex-1 text-gray-500"
                              >
                                View By
                              </label>
                              <select
                                className="my-1 font-sofiapro-light inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-standard"
                                id="sortBy"
                                name="sortBy"
                                onChange={(e) => onChange(e)}
                                value={sortBy}
                              >
                                <option value="date_created">Date</option>
                                <option value="price">Price</option>
                                <option value="sold">Sold</option>
                                <option value="title">Name</option>
                              </select>
                            </div>
                            <div>
                              <div className="form-group">
                                <label
                                  htmlFor="order"
                                  className="mr-3 min-w-0 flex-1 text-gray-500"
                                >
                                  Order
                                </label>
                                <select
                                  className="my-1 font-sofiapro-light inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-standard"
                                  id="order"
                                  name="order"
                                  onChange={(e) => onChange(e)}
                                  value={order}
                                >
                                  <option value="asc">A - Z</option>
                                  <option value="desc">Z - A</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <button
                    type="submit"
                    className="flex mt-10 mx-auto rounded-md bg-orange-standard px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-black transition duration-300 ease-in-out"
                  >
                    Search
                  </button>
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center gap-2">
              <div className="relative">
                {/* SEARCH */}
                <label htmlFor="Search" className="sr-only">
                  {" "}
                  Search{" "}
                </label>

                <input
                  type="text"
                  id="Search"
                  placeholder="Search for..."
                  className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="button"
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
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* <button
                type="button"
                className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
              </button> */}
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Desktop Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
                >
                  {/* {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))} */}
                  {categories &&
                    categories !== null &&
                    categories !== undefined &&
                    // MAPEAR LAS CATEGORIAS
                    categories.map((category) => {
                      if (category.sub_categories.length === 0) {
                        return (
                          <div
                            key={category.id}
                            className="flex items-center h-5 my-5"
                          >
                            <input
                              name="category_id"
                              type="radio"
                              className="h-4 w-4 text-orange-standard border-gray-300 rounded-full focus:ring-0"
                            />
                            <label className="ml-3 min-w-0 flex-1 text-neutral-600">
                              {category.name}
                            </label>
                          </div>
                        );
                      } else {
                        let result = [];
                        result.push(
                          <div
                            key={category.id}
                            className="flex items-center h-5 my-5"
                          >
                            <input
                              name="category_id"
                              type="radio"
                              className="h-4 w-4 text-orange-standard border-gray-300 rounded-full focus:ring-0"
                            />
                            <label className="ml-3 min-w-0 flex-1 text-neutral-600">
                              {category.name}
                            </label>
                          </div>
                        );

                        category.sub_categories.map((sub_category) => {
                          result.push(
                            <div
                              key={sub_category.id}
                              className="flex items-center h-5 my-5"
                            >
                              <input
                                name="category_id"
                                type="radio"
                                className=" h-4 w-4 text-orange-standard border-gray-300 rounded-full focus:ring-0"
                              />
                              <label className="ml-3 min-w-0 flex-1 text-neutral-600">
                                {sub_category.name}
                              </label>
                            </div>
                          );
                        });

                        return result;
                      }
                    })}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {prices &&
                              prices.map((price, index) => (
                                <div key={index} className="flex items-center">
                                  <input
                                    name="price_range"
                                    onChange={(e) => onChange(e)}
                                    value={price.name}
                                    type="radio"
                                    defaultChecked
                                    className="h-4 w-4 border-gray-300 rounded text-orange-standard focus:ring-0"
                                  />
                                  <label
                                    htmlFor="price_range"
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {price.name}
                                  </label>
                                </div>
                              ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">{products && showProducts()}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Get_Products;
