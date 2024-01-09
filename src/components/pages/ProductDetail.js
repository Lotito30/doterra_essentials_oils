import { useParams } from "react-router-dom";
import {
  get_product,
  get_related_products,
} from "../../redux/actions/products";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'

const products = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function ProductDetail({ get_product, get_related_products,product,related_products }) {
  const [selectedColor, setSelectedColor] = useState(products.colors[0])


  const params = useParams();

  const productId = params.productId

  useEffect(() => {
    window.scrollTo(0,0)
      get_product(productId)
      get_related_products(productId)
  },[])

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex">
            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                <Tab.Panel key={product.id}>
                  <img
                    src={product.get_thumbnail}
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                  />
                </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 capitalize">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${product.price}</p>
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
                        products.rating > rating ? 'text-orange-standard' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{products.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-6">
              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-orange-standard border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium hover:bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-orange-standard sm:w-full transition ease-in-out duration-300"
                >
                  Add to cart
                </button>

                <button
                  type="button"
                  className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
   product:state.Products.product,
   related_products:state.Products.related_products

});
export default connect(mapStateToProps, {
  get_product,
  get_related_products,
})(ProductDetail);
