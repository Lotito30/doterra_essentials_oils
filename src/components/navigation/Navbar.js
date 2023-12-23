import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { DotLoader } from "react-spinners";
import icono from "assets/img/icono.png";

const solutions = [
  {
    name: "Products",
    description: "Discover Our Range of Oils",
    href: "/products",
    icon: IconOne,
  },
  {
    name: "Experience",
    description: "Feel the Power of Nature",
    href: "/experience",
    icon: IconTwo,
  },
  {
    name: "About Us",
    description: "Learn About Our Ethical Sourcing",
    href: "/about",
    icon: IconThree,
  },
  {
    name: "Contact Us",
    description: "We’re Here to Help You",
    href: "/contact",
    icon: IconThree,
  },
];

function Navbar() {
  const [loading, setLoading] = useState(true);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.querySelector("#navbar")) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.querySelector("#navbar").classList.add("shadow-navbar");
        document.querySelector("#navbar").classList.add("bg-white");
      } else {
        document.querySelector("#navbar").classList.remove("shadow-navbar");
        document.querySelector("#navbar").classList.remove("bg-white");
      }
    }
  }

  return (
    <navbar
      id="navbar"
      class="transition duration-400 ease-in-out fixed top-0 w-full z-40"
    >
      <div class="px-5 w-full md:px-12 lg:px-20">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <Link to="/" class="block text-orange-standard">
              <img src={icono} className="w-20 h-20" />
            </Link>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    to="/products"
                    class="text-gray-500 border-b-2 border-b-transparent hover:border-orange-standard font-bold"
                  >
                    {" "}
                    Products{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/experience"
                    class="text-gray-500 border-b-2 border-b-transparent hover:border-orange-standard font-bold"
                  >
                    {" "}
                    Experience{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    class="text-gray-500 border-b-2 border-b-transparent hover:border-orange-standard font-bold"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    class="text-gray-500 border-b-2 border-b-transparent hover:border-orange-standard font-bold"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <Link
                class="inline-flex rounded-md bg-orange-standard px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-black transition duration-300 ease-in-out"
                to="/signin"
              >
                Sign in
                <DotLoader
                  className="ml-1"
                  loading={loading}
                  size={20}
                  color="#f2f2f2"
                />
              </Link>

              <div class="hidden sm:flex">
                <Link
                  class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-orange-standard hover:bg-gray-200 transition duration-300 ease-in-out"
                  to="/signup"
                >
                  Sign up
                </Link>
              </div>
            </div>

            <div class="block md:hidden">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? "text-white" : "text-white/90"}
                group inline-flex items-center rounded-md bg-orange-standard px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            {solutions.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                  <item.icon aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>                          
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </navbar>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
