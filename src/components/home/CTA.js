import { Link } from "react-router-dom";
function CTA() {
  return (
    <section class="overflow-hidden bg-[url(assets/img/fondoHome.jpg)] bg-cover bg-top bg-no-repeat">
      <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-20">
        <div class="text-center sm:text-left">
          <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Unleash the Power of Nature with doTERRA
          </h2>

          <p class="hidden text-white max-w-lg md:mt-6 md:block md:text-lg md:leading-relaxed">
            Experience the purity and potency of doTERRA essential oils. Our
            products are carefully distilled from plants that have been
            patiently harvested at the perfect moment by experienced growers
            from around the world.
          </p>

          <div class="mt-4 sm:mt-8">
            <Link
              to="/shop"
              class="inline-block rounded-md bg-orange-standard px-5 py-2.5 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-yellow-400"
            >
              Get Yours Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
