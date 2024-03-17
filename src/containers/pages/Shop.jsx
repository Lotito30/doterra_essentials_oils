import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { FilterIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import Card from "components/card/CardShop";
import CarouselProducts from "components/carousel/CarouselProducts";
import { prices } from "helpers/fixedPrices";
import Layout from "hocs/layouts/Layout";
import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Oval } from "react-loader-spinner";
import { connect } from "react-redux";
import { get_filtered_products, get_products } from "../../redux/actions/products";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Products({
  products,
  get_filtered_products,
  filtered_products,
  search_products,
  loading,
  categories,
  get_products,
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filtered, setFiltered] = useState(false);

  const [formData, setFormData] = useState({
    category_id: "0",
    price_range: "Any",
    sortBy: "name",
    order: "asc",
  });

  const { category_id, price_range, sortBy, order } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await get_filtered_products(category_id, price_range, sortBy, order);
    setFiltered(true);
  };

  const onDelete = async () => {
    setFormData({
      category_id: "0",
      price_range: "Any",
      sortBy: "created",
      order: "asc",
    });
    await get_filtered_products("0", "Any", "created", "asc");
  };
  useEffect(() => {
    const fetchProduct = async () => {
      await get_products()
    }
    fetchProduct()
  },[])
  const showProducts = () => {
    let results = [];

    const productsList = filtered ? filtered_products : search_products || products
    
    if(!productsList || productsList.length === 0){
      return <p>No products to display</p>
    }

    for (let i = 0; i < productsList.length; i += 3) {
      results.push(
        <div
          key={i}
          className="mb-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8"
        >
          {productsList.slice(i, i+3).map((product,index) => (
            <div key={index}>
              <Card data={product}/>
            </div>
          ))}
        </div>
      );
    }
    return results;
  };
  return (
    <Layout>
      <Helmet>
        <title>Shop | doTERRA</title>
        <meta
          name="description"
          content="Explore doTERRA's pure, potent essential oils. Experience nature's transformative power for wellness. Join us on your journey to health and vitality."
        />
        <meta
          name="keywords"
          content="doTERRA Oils, Natural Wellness, Health Products, Essential Oils, Aromatherapy, Pure Extracts, Sustainably Sourced"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="Lotito" />
        <meta name="publisher" content="Lotito" />
        {/* <link rel="canonical" href="https://oilslotito.com.ae"/> */}

        <meta name="twitter:title" content="Home | doTERRA" />
        <meta
          name="twitter:description"
          content="Explore doTERRA's pure, potent essential oils. Experience nature's transformative power for wellness. Join us on your journey to health and vitality."
        />
        {/* <meta name="twitter:image" content={headerImg} /> */}
      </Helmet>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="flex items-center justify-center w-20 px-10 py-4 text-base font-medium text-center bg-orange-standard transform rounded-xl ">
            <Oval
              visible={true}
              height="30"
              width="30"
              color="white"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />{" "}
          </div>
        </div>
      ) : (
        // SHOPVIEW
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
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
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
                                  open
                                    ? "text-orange-standard"
                                    : "text-gray-900",
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
                                  open
                                    ? "text-orange-standard"
                                    : "text-gray-900",
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
                <form className="hidden lg:block" onSubmit={(e) => onSubmit(e)}>
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
                  >
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
                {/* <span>
              {search_products &&
              search_products !== null &&
              search_products !== undefined &&
              search_products.length === 0 ? (
                <p>
                  Couldn't find what you're looking for? Explore our products;
                  you might discover something perfect for you. Happy shopping!
                </p>
              ) : (
                <span className="sr-only"></span>
              )}
            </span> */}
                <div className="lg:col-span-3">
                  {products && showProducts()}
                </div>
              </div>
            </section>
            {/* interested in PRODUCTS */}
            {/* RECORRER LOS PRODUCTOS Y AL AZAR MOSTRAR 6 PRODUCTOS CON RANDOM */}
            <section className="my-5 sr-only">
              <div>
                <div>
                  <CarouselProducts
                    title={"Products you may be interested in"}
                    description={"Products you may be interested in description"}
                    data={categories}
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      )}
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  categories: state.Categories.categories,
  products: state.Products.products,
  filtered_products: state.Products.filtered_products,
  search_products: state.Products.search_products,
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
  get_filtered_products,
  get_products,
})(Products);
