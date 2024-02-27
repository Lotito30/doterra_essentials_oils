import { Disclosure, Tab } from "@headlessui/react";
import { HeartIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import { CheckIcon, ClockIcon, StarIcon } from "@heroicons/react/solid";
import GetSrcPhoto from "components/photo/GetSrcPhoto";
import Layout from "hocs/layouts/Layout";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Oval } from "react-loader-spinner";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  add_item,
  get_item_total,
  get_items,
  get_total,
} from "../../redux/actions/cart";
import {
  get_product,
  get_related_products,
} from "../../redux/actions/products";
import {
  add_wishlist_item,
  get_wishlist_item_total,
  get_wishlist_items,
  remove_wishlist_item,
} from "../../redux/actions/wishlist";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const products = {
  rating: 4,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductDetails({
  isAuthenticated,
  product,
  get_product,
  get_related_products,
  get_items,
  add_item,
  get_total,
  get_item_total,
  add_wishlist_item,
  get_wishlist_items,
  get_wishlist_item_total,
  remove_wishlist_item,
  wishlist,
}) {
  const params = useParams();
  const productId = params.productId;

  const [loading, setLoading] = useState(false);

  const addToCart = async () => {
    if (
      product &&
      product !== null &&
      product !== undefined &&
      product.quantity > 0
    ) {
      setLoading(true);
      await add_item(product);
      await get_items();
      await get_total();
      await get_item_total();
      setLoading(false);
    }
  };
  const addToWishList = async () => {
    if (
      isAuthenticated &&
      product &&
      product !== null &&
      product !== undefined &&
      wishlist &&
      wishlist !== undefined &&
      wishlist !== null
    ) {
      !wishlist.find(
        (item) => item.product.id.toString() === product.id.toString()
      )
        ? await add_wishlist_item(product.id)
        : await remove_wishlist_item(product.id);
      await get_wishlist_items();
      await get_wishlist_item_total();
    }
  };

  useEffect(() => {
    get_product(productId);
    get_related_products(productId);
    get_wishlist_items();
    get_wishlist_item_total();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Product detail | doTERRA</title>
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
      {product && product !== undefined && product !== null && (
        <div className="max-w-2xl mx-auto px-4 py-14 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex">
              <Tab.Panels className="w-full lg:aspect-w-1 lg:aspect-h-1">
                <Tab.Panel key={product.id}>
                  <img
                    src={GetSrcPhoto(product.photo)}
                    className="w-1/2 object-center object-cover lg:w-full mx-auto"
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 capitalize">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">AED {product.price} </p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          products.rating > rating
                            ? "text-orange-standard"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{products.rating} out of 5 stars</p>
                </div>
              </div>
              <p className="mt-2 flex space-x-1">
                {product &&
                product !== null &&
                product !== undefined &&
                product.quantity > 0 ? (
                  <>
                    <CheckIcon
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                    <span className="text-green-500 font-semibold">
                      In Stock
                    </span>
                  </>
                ) : (
                  <>
                    <ClockIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-300"
                      aria-hidden="true"
                    />
                    <span className="text-red-500 font-semibold">
                      Out of Stock
                    </span>
                  </>
                )}
              </p>

              <div className="mt-4">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
              <div className="mt-6">
                <div className="mt-10 flex sm:flex-col1">
                  {loading ? (
                    <button className="max-w-xs flex-1 bg-orange-standard border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium hover:bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-orange-standard sm:w-full transition ease-in-out duration-300">
                      <Oval
                        visible={true}
                        height="20"
                        width="20"
                        color="#FFF"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />{" "}
                    </button>
                  ) : (
                    <button
                      //  type="submit"
                      onClick={addToCart}
                      className="max-w-xs flex-1 bg-orange-standard border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium hover:bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-orange-standard sm:w-full transition ease-in-out duration-300"
                    >
                      Add to cart
                    </button>
                  )}
                  
                  <button
                    onClick={addToWishList}
                    className={`ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 
                    `}
                  >
                    {wishlist && product?.id && wishlist.find(
                      (item) =>
                        item.product.id.toString() === product.id.toString()
                    ) 
                    ? <FontAwesomeIcon icon={faHeart} className="h-5 w-5 flex-shrink-0 text-red-500"/>
                    : <HeartIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                  }
                    <span className="sr-only">Add to favorites</span>
                  </button>
                </div>
              </div>
              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="border-t divide-y divide-gray-200">
                  {products.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                              <span
                                className={classNames(
                                  open
                                    ? "text-orange-standard"
                                    : "text-gray-900",
                                  "text-sm font-medium"
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="block h-6 w-6 text-orange-standard group-hover:text-orange-standard"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="pb-6 prose prose-sm"
                          >
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  product: state.Products.product,
  wishlist: state.Wishlist.items,
});
export default connect(mapStateToProps, {
  get_product,
  get_related_products,
  get_items,
  add_item,
  get_total,
  get_item_total,
  add_wishlist_item,
  get_wishlist_items,
  get_wishlist_item_total,
  remove_wishlist_item,
})(ProductDetails);
