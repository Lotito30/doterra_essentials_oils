import GetSrcPhoto from "components/photo/GetSrcPhoto";
import { useEffect, useState } from "react";

function Content({ products }) {
  const [srcPhoto, setSrcPhoto] = useState([]);

  useEffect(() => {
      let selectedPhotos = [];
      while (selectedPhotos.length <= 2) {
        let numberPhoto = Math.floor(Math.random() * products.length);

        if (!selectedPhotos.includes(numberPhoto)) {
          selectedPhotos.push(numberPhoto);
        }
      }
      setSrcPhoto(selectedPhotos)
  }, []);

  return (
    <div className="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400 md:text-center "></div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Experience Nature's <br className="hidden md:block" />
              Miracle with doTERRA{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Essential Oils
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Discover the essence of well-being with doTERRA. Our oils, a blend
              of science and nature, bring balance and harmony to your life
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded-xl shadow-navbar h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={srcPhoto !== undefined ? GetSrcPhoto(products[srcPhoto[0]]?.photo) : ""}
              alt={products.name}
            />
            <img
              className="object-cover w-20 h-20 rounded-lg shadow-navbar sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={srcPhoto !== undefined ? GetSrcPhoto(products[srcPhoto[1]]?.photo) : ""}
              alt={products.name}
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded-lg shadow-navbar sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={srcPhoto !== undefined ? GetSrcPhoto(products[srcPhoto[2]]?.photo) : ""}
              alt={products.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
