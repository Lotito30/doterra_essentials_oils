import fondoHome3 from "assets/img/fondoHome3.webp";
import fondoHome4 from "assets/img/fondoHome4.webp";
import fondoHome from "assets/img/fondoHome.jpg";

function Content() {
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
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={fondoHome}
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={fondoHome3}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={fondoHome4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
