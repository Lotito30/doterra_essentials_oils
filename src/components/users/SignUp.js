import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section>
      <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
        <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div class="w-full px-6 py-3">
              <div>
                <div class="mt-3 text-left sm:mt-5">
                  <div class="inline-flex items-center w-full">
                    <div>
                      <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">
                        Sign Up.
                      </h2>
                    </div>
                  </div>
                  <div class="mt-4 text-base text-gray-500">
                    <p>Sign up and get our newest news.</p>
                  </div>
                </div>
              </div>
              <div class="mt-6 space-y-2">
                <div>
                  <label for="email" class="block text-sm font-medium text-neutral-600"> Email address </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label for="password" class="block text-sm font-medium text-neutral-600"> Password </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your password"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-neutral-600"> Phone </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your phone"
                  />
                </div>
                <div class="flex flex-col mt-4 lg:space-y-2">
                  <button
                    type="button"
                    class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign up
                  </button>
                  <Link
                    to="/signin"
                    type="button"
                    class="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
                  >
                    {" "}
                    Do have an account??{" "}
                  </Link>
                  <div class="relative my-4">
                    <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 bg-white text-neutral-600">
                        {" "}
                        Or continue with{" "}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-navbar rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 "
                    >
                      <div class="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6"
                          viewBox="0 0 48 48"
                        >
                          <defs>
                            <path
                              id="a"
                              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                            ></path>
                          </defs>
                          <clipPath id="b">
                            <use overflow="visible"></use>
                          </clipPath>
                          <path
                            clip-path="url(#b)"
                            fill="#FBBC05"
                            d="M0 37V11l17 13z"
                          ></path>
                          <path
                            clip-path="url(#b)"
                            fill="#EA4335"
                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                          ></path>
                          <path
                            clip-path="url(#b)"
                            fill="#34A853"
                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                          ></path>
                          <path
                            clip-path="url(#b)"
                            fill="#4285F4"
                            d="M48 48L17 24l-4-3 35-10z"
                          ></path>
                        </svg>
                        <span class="ml-4"> Log in with Google</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-first hidden w-full h-full lg:block">
              <img
                class="object-cover h-full bg-cover rounded-l-lg"
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
