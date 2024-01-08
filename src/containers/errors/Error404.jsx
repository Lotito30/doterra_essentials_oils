import { Link } from "react-router-dom";
import fotoError from "assets/img/error404.webp";

function Error404() {
  return (
    <main class="grid lg:grid-cols-2 min-h-full place-items-center bg-white px-6 py-24 sm:py-20 lg:px-8 h-screen">
      <div class="w-full h-full overflow-hidden hidden lg:block">
        <img
          class="px-3 inset-0 object-cover w-full h-full"
          src={fotoError}
          alt=""
        />
      </div>
      <div class="text-center">
        <p class="text-3xl font-semibold text-orange-standard">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            class="rounded-md bg-orange-standard hover:bg-black px-3 py-2.5 transition duration-300 ease-in-out text-sm font-semibold text-white shadow-sm hover:black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Go back home
          </Link>
          <Link
            to="/contactus"
            class="transition duration-300 ease-in-out text-sm font-semibold text-gray-900 px-3 py-2.5 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
export default Error404;
