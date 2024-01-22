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
  onDelete,
}) {

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (

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
                                  <option value="asc">A - Z | 0 - 9 </option>
                                  <option value="desc">Z - A | 9 - 0</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <div className="flex items-center justify-around w-full mt-20">
                  <button
                    type="submit"
                    className="inline-block rounded-md bg-orange-standard w-20 h-10 text-sm font-medium text-white shadow hover:bg-black transition duration-300 ease-in-out"
                  >
                    Search
                  </button>
                  <button
                    onClick={onDelete}
                    className="inline-block rounded-md bg-red-600 w-20 h-10 text-sm font-medium text-white shadow hover:bg-black transition duration-300 ease-in-out"
                  >
                    Clear
                  </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-end pt-10 pb-6 border-b border-gray-200">
            <h1 className=" text-4xl font-extrabold tracking-tight text-gray-900 hidden">
              {""}Products{""}
            </h1>

            <div className="flex items-center gap-2">
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
              <form className="hidden lg:block" onSubmit={e => onSubmit(e)}>
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
                                  <option value="asc">A - Z | 0 - 9</option>
                                  <option value="desc">Z - A | 9 - 0</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <div className="flex items-center justify-around w-full mt-20">
                  <button
                    type="submit"
                    className="inline-block rounded-md bg-orange-standard w-20 h-10 text-sm font-medium text-white shadow hover:bg-black transition duration-300 ease-in-out"
                  >
                    Search
                  </button>
                  <button
                    onClick={onDelete}
                    className="inline-block rounded-md bg-red-600 w-20 h-10 text-sm font-medium text-white shadow hover:bg-black transition duration-300 ease-in-out"
                  >
                    Clear
                  </button>
                  </div>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {products && showProducts()}
              </div>
            </div>
          </section>
        </main>
      </div>
  );
}

export default Get_Products;
