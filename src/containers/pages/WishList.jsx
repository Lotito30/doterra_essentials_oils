import Layout from "hocs/layouts/Layout";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import {
  get_wishlist_item_total,
  get_wishlist_items,
  remove_wishlist_item,
} from "../../redux/actions/wishlist";
import { useEffect } from "react";
import GetSrcPhoto from "components/photo/GetSrcPhoto";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/solid";

function WishList({
  wishlist,
  get_wishlist_items,
  get_wishlist_item_total,
  total_items,
  remove_wishlist_item,
}) {
  useEffect(() => {
    get_wishlist_items();
    get_wishlist_item_total();
  }, [remove_wishlist_item]);

  const showItems = () => {
    return (
      <div>
        {wishlist &&
          wishlist !== null &&
          wishlist !== undefined &&
          wishlist.map((item, index) => {
            return (
              <div key={index}>
                <article className="rounded-xl p-4 ring ring-indigo-50 sm:p-6 lg:p-8 relative mb-3">
                  <Link
                    to={`/product/${item.product.id}`}
                    className="cursor-pointer"
                  >
                    <div className="flex items-start sm:gap-8 ">
                      <img
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48 "
                        src={GetSrcPhoto(item.product.photo)}
                        alt="photo"
                      />
                      <div>
                        <h3 className="mt-4 text-lg font-medium sm:text-2xl hover:underline">
                          {item.product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-700">
                          {item.product.description}
                        </p>

                        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                          <p className="mt-2 text-xl font-medium text-gray-500 sm:mt-0">
                            AED {item.product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute top-5 right-5">
                    <span className="sr-only">Remove</span>
                    <button
                      onClick={async () => {
                        await remove_wishlist_item(item.product.id);
                        await get_wishlist_items();
                        await get_wishlist_item_total();
                      }}
                    >
                      <TrashIcon
                        className="h-5 w-5 text-gray-400 hover:text-gray-500 z-50 cursor-pointer"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </article>
              </div>
            );
          })}
      </div>
    );
  };
  return (
    <Layout>
      <Helmet>
        <title>Wishlist | doTERRA</title>
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
      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Wishlist Items <span className="text-green-500">({total_items})</span>
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-y-3 items-start">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping wishlist
            </h2>
            <ul role="list" className="">
              {wishlist && showItems()}
            </ul>
          </section>

          {/* RELATED ITEMS */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Related Items
            </h2>
            <div className="mt-2">
              <div className="flex items-center justify-between mt-0.5">
                <span className="sr-only">
                  map de items con su nombre, valor unitario y precio
                  multiplicado por la cantidad de productos comprados
                </span>
              </div>
            </div>
            <dl className="mt-6 space-y-4">CARUSEL</dl>
          </section>
        </div>
      </div>
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  wishlist: state.Wishlist.items,
  total_items: state.Wishlist.total_items,
});

export default connect(mapStateToProps, {
  get_wishlist_items,
  get_wishlist_item_total,
  remove_wishlist_item,
})(WishList);
