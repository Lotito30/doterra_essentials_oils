import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DotLoader } from "react-spinners";
import icono from "assets/img/iconodoTERRA3.png";
import Alert from "../../components/alert";
import { logout } from "../../redux/actions/auth";
// import { ChevronDownIcon } from "@heroicons/react/solid";

function Navbar({ isAuthenticated, user, logout }) {
  const solutions = [
    {
      name: "Shop",
      description: "Discover Our Range of Oils",
      href: "/shop",
      icon: iconProduct,
    },
    {
      name: "Experience",
      description: "Feel the Power of Nature",
      href: "/experience",
      icon: IconExperience,
    },
    {
      name: "About Us",
      description: "Learn About Our Ethical Sourcing",
      href: "/about",
      icon: IconAbout,
    },
    {
      name: "Contact Us",
      description: "We're Here to Help You",
      href: "/contact",
      icon: IconContact,
    },
    // {
    //   name: "Sign in",
    //   description: "Access your existing account here",
    //   href: "/signin",
    //   icon: IconSignIn,
    // },
    {
      name: "Sign up",
      description: "Create your new account now",
      href: "/signup",
      icon: IconSignUp,
    },
    {
      name: "Log out",
      description: "End your current session now",
      onclick: () => logout(),
      icon: IconLogOut,
    },
  ];

  const loading = true;

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

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }
const ClassPopoverButton = 'rounded-md bg-orange-standard px-3.5 py-2.5 focus-visible:ring-2 focus-visible:ring-white/75'
  const authLinks = (
    <div className="block">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                
                group inline-flex items-center text-black text-base font-mediumtransition-all duration-300 ease-in-out p-3 bg-gray-200 rounded-lg hover:bg-gray-300`}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                    fill="#0F0F0F"
                  ></path>
                </svg>
              ) : (isAuthenticated ? 
                (<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "", transform: "", msFilter: "" }}
                >
                  <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z">

                  </path>
                </svg>): 
                (<svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                >
                  <path
                    d="M4 4H21M4 12H21M4 20H21"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>)
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-3 "
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-3"
            >
              <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-sm -translate-x-3/4 transform px-4 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 bg-white p-7">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        onClick={item.onclick}
                        to={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-400 ease-in-out hover:bg-orange-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50 hover:scale-105"
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
  );

  const guestLinks = (
    <Fragment>
      <Link
        class="inline-flex rounded-md bg-orange-standard px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-black transition duration-300 ease-in-out"
        to="/signin"
      >
        Sign in
        <DotLoader
          className="ml-3"
          loading={loading}
          size={20}
          color="#f2f2f2"
        />
      </Link>

      <Link
        class="hidden md:block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-orange-standard hover:bg-gray-200 transition duration-300 ease-in-out"
        to="/signup"
      >
        Sign up
      </Link>
    </Fragment>
  );

  return (
    <navbar
      id="navbar"
      class="transition duration-400 ease-in-out fixed top-0 w-full z-40"
    >
      <div class="px-5 w-full md:px-12 lg:px-20">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12 ">
            <Link to="/" class="text-orange-standard flex items-center">
              <img src={icono} className="w-16 h-16" alt="doTERRA" />
              <h2 className="hidden lg:block text-black text-2xl font-bold">
                dōTERRA
              </h2>
            </Link>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    to="/shop"
                    class="text-gray-500 border-b-2 border-b-transparent hover:border-orange-standard font-bold"
                  >
                    {" "}
                    Shop{" "}
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
            {isAuthenticated ? (
              <div class="sm:flex ">{authLinks}</div>
            ) : (
              <div className="inline-flex gap-4">
                <div className="inline-flex sm:gap-4">{guestLinks}</div>
                <div className="block md:hidden">{authLinks}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Alert />
    </navbar>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
});

export default connect(mapStateToProps, {
  logout,
})(Navbar);

function iconProduct() {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="-100 0 1424 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <path
        fill="#000000"
        d="M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
      ></path>
    </svg>
  );
}
function IconExperience() {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="-4 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="6" r="4" stroke="#1C274C" strokeWidth="1.5"></circle>
      <path
        d="M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z"
        stroke="#1C274C"
        strokeWidth="1.5"
      ></path>
      <path
        d="M18.0885 12.5385L18.5435 11.9423L18.0885 12.5385ZM19 8.64354L18.4681 9.17232C18.6089 9.31392 18.8003 9.39354 19 9.39354C19.1997 9.39354 19.3911 9.31392 19.5319 9.17232L19 8.64354ZM19.9115 12.5385L19.4565 11.9423L19.9115 12.5385ZM18.5435 11.9423C18.0571 11.571 17.619 11.274 17.2659 10.8891C16.9387 10.5324 16.75 10.1638 16.75 9.69973H15.25C15.25 10.6481 15.6642 11.362 16.1606 11.9031C16.6311 12.4161 17.2372 12.8322 17.6335 13.1347L18.5435 11.9423ZM16.75 9.69973C16.75 9.28775 16.9898 8.95469 17.2973 8.81862C17.5635 8.7008 17.9874 8.68874 18.4681 9.17232L19.5319 8.11476C18.6627 7.24047 17.5865 7.0503 16.6903 7.44694C15.8352 7.82533 15.25 8.69929 15.25 9.69973H16.75ZM17.6335 13.1347C17.7825 13.2483 17.9756 13.3959 18.1793 13.5111C18.3832 13.6265 18.6656 13.75 19 13.75V12.25C19.0344 12.25 19.0168 12.2615 18.9179 12.2056C18.8187 12.1495 18.7061 12.0663 18.5435 11.9423L17.6335 13.1347ZM20.3665 13.1347C20.7628 12.8322 21.3689 12.4161 21.8394 11.9031C22.3358 11.362 22.75 10.6481 22.75 9.69973H21.25C21.25 10.1638 21.0613 10.5324 20.7341 10.8891C20.381 11.274 19.9429 11.571 19.4565 11.9423L20.3665 13.1347ZM22.75 9.69973C22.75 8.69929 22.1648 7.82533 21.3097 7.44694C20.4135 7.0503 19.3373 7.24047 18.4681 8.11476L19.5319 9.17232C20.0126 8.68874 20.4365 8.7008 20.7027 8.81862C21.0102 8.95469 21.25 9.28775 21.25 9.69973H22.75ZM19.4565 11.9423C19.2939 12.0663 19.1813 12.1495 19.0821 12.2056C18.9832 12.2615 18.9656 12.25 19 12.25V13.75C19.3344 13.75 19.6168 13.6265 19.8207 13.5111C20.0244 13.3959 20.2175 13.2483 20.3665 13.1347L19.4565 11.9423Z"
        fill="#1C274C"
      ></path>
    </svg>
  );
}
function IconAbout() {
  return (
    <svg
      fill="#000000"
      height="50px"
      width="50px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-20 0 572.643 502.643"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M251.256,237.591c37.166,0,67.042-30.048,67.042-66.977c0.043-37.037-29.876-66.999-67.042-66.999 c-36.908,0-66.869,29.962-66.869,66.999C184.387,207.587,214.349,237.591,251.256,237.591z"></path>
          <path d="M305.032,248.506H197.653c-19.198,0-34.923,17.602-34.923,39.194v107.854c0,1.186,0.604,2.243,0.669,3.473h175.823 c0.129-1.229,0.626-2.286,0.626-3.473V287.7C339.912,266.108,324.187,248.506,305.032,248.506z"></path>
          <path d="M431.588,269.559c29.832,0,53.754-24.008,53.754-53.668s-23.922-53.711-53.754-53.711 c-29.617,0-53.582,24.051-53.582,53.711C377.942,245.53,401.972,269.559,431.588,269.559z"></path>
          <path d="M474.708,278.317h-86.046c-15.445,0-28.064,14.107-28.064,31.472v86.413c0,0.928,0.453,1.812,0.518,2.826h141.03 c0.065-1.014,0.496-1.898,0.496-2.826v-86.413C502.707,292.424,490.11,278.317,474.708,278.317z"></path>
          <path d="M71.011,269.559c29.789,0,53.733-24.008,53.733-53.668S100.8,162.18,71.011,162.18c-29.638,0-53.603,24.051-53.603,53.711 S41.373,269.559,71.011,269.559L71.011,269.559z"></path>
          <path d="M114.109,278.317H27.977C12.576,278.317,0,292.424,0,309.789v86.413c0,0.928,0.453,1.812,0.539,2.826h141.03 c0.065-1.014,0.475-1.898,0.475-2.826v-86.413C142.087,292.424,129.489,278.317,114.109,278.317z"></path>
        </g>
      </g>
    </svg>
  );
}
function IconContact() {
  return (
    <svg
      fill="#000000"
      width="50px"
      height="50px"
      viewBox="-5 0 80 70"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M62.6738,49.8809c-0.4111-0.584-1.1523-0.9614-1.8877-0.9614H60.061V17.2261c0-1.7427-1.4194-3.1606-3.1641-3.1606H45.8047v-3.0996c0-2.084-1.6953-3.7798-3.7793-3.7798H20.855c-2.0859,0-3.7832,1.6958-3.7832,3.7798v3.0996H7.103c-1.7446,0-3.1641,1.418-3.1641,3.1606v31.6934H3.2139c-0.7354,0-1.4766,0.3774-1.8877,0.9614c-0.3306,0.4688-0.4141,1.0342-0.231,1.5464l1.248,3.5439c0.4312,1.2227,1.144,1.8428,2.1187,1.8428h55.0762c0.9746,0,1.6875-0.6201,2.1187-1.8433l1.2461-3.5386C63.0879,50.915,63.0044,50.3496,62.6738,49.8809z M20.855,28.2139h2.8022v4.3169c0,0.5522,0.4478,1,1,1s1-0.4478,1-1v-4.3169h4.7827v7.2412c0,0.5522,0.4478,1,1,1s1-0.4478,1-1v-7.2412h4.9175v4.3169c0,0.5522,0.4478,1,1,1s1-0.4478,1-1v-4.3169h2.668c2.084,0,3.7793-1.6958,3.7793-3.7798v-3.7085h7.0503v23.6099h-41.71V20.7256h5.9268v3.7085C17.0718,26.5181,18.769,28.2139,20.855,28.2139z M21.2932,26.2139l7.6743-7.317l1.8152,1.5826c0.1885,0.1641,0.4229,0.2461,0.6572,0.2461s0.4692-0.082,0.6577-0.2466l2.1458-1.8724l7.9888,7.5863c-0.0687,0.0081-0.136,0.0209-0.2068,0.0209H21.2932z M43.6921,10.3619c0.0689,0.1894,0.1126,0.391,0.1126,0.6039v13.4683c0,0.1516-0.0248,0.2963-0.0606,0.4368l-7.9872-7.5848L43.6921,10.3619z M41.9973,9.186l-10.5578,9.2124L20.8729,9.186H41.9973z M19.0718,10.9658c0-0.2112,0.0435-0.4111,0.1114-0.5992l8.2706,7.2106l-8.1309,7.7523c-0.1555-0.2641-0.251-0.5676-0.251-0.8954V10.9658z M5.939,17.2261c0-0.6401,0.522-1.1606,1.1641-1.1606h9.9688v2.6602H10.145c-0.5522,0-1,0.4478-1,1v25.6099c0,0.5522,0.4478,1,1,1h43.71c0.5522,0,1-0.4478,1-1V19.7256c0-0.5522-0.4478-1-1-1h-8.0503v-2.6602H56.897c0.6421,0,1.1641,0.5205,1.1641,1.1606v31.6934H41.3198c-0.2935,0-0.5718,0.145-0.7617,0.3687s-0.2715,0.5356-0.2241,0.8252c0,0.2563-0.2163,0.4727-0.4727,0.4727H24.1387c-0.2563,0-0.4727-0.2163-0.4717-0.5044c0.0474-0.29-0.0347-0.5859-0.2246-0.8096s-0.4688-0.3525-0.7622-0.3525H5.939V17.2261z M59.77,54.3062c-0.1406,0.4004-0.2412,0.5015-0.2349,0.5078H4.48c-0.0361-0.0381-0.1279-0.1602-0.25-0.5073l-1.1768-3.3403c0.0508-0.0259,0.1118-0.0469,0.1606-0.0469h18.5869c0.335,0.9688,1.2563,1.6665,2.3379,1.6665h15.7227c1.0815,0,2.0029-0.6978,2.3379-1.6665h18.5869c0.0488,0,0.1099,0.021,0.1606,0.0469L59.77,54.3062z"></path>
      </g>
    </svg>
  );
}
// function IconSignIn() {
//   return (
//     <svg viewBox="-1 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//       <g
//         id="SVGRepo_tracerCarrier"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       ></g>
//       <g id="SVGRepo_iconCarrier">
//         {" "}
//         <path
//           fill-rule="evenodd"
//           clip-rule="evenodd"
//           d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H7C6.44772 19 6 19.4477 6 20C6 20.5523 6.44772 21 7 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H7ZM12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289C10.9024 7.68342 10.9024 8.31658 11.2929 8.70711L13.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H13.5858L11.2929 15.2929C10.9024 15.6834 10.9024 16.3166 11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L12.7071 7.29289Z"
//           fill="#000000"
//         ></path>{" "}
//       </g>
//     </svg>
//   );
// }
function IconSignUp() {
  return (
    <svg
      height="50px"
      width="50px"
      viewBox="-120 0 680 550"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M259.993,460.958c14.498,14.498,75.487-23.002,89.985-37.492l59.598-59.606l-52.494-52.485l-59.597,59.597 C282.996,385.462,245.504,446.46,259.993,460.958z"></path>
      <path d="M493.251,227.7c-14.498-14.49-37.996-14.49-52.485,0l-71.68,71.678l52.494,52.486l71.671-71.68 C507.741,265.695,507.741,242.198,493.251,227.7z M399.586,308.882l-9.008-8.999l50.18-50.18l8.991,8.99L399.586,308.882z"></path>
      <path d="M374.714,448.193c-14.071,14.055-67.572,51.008-104.791,51.008c-0.008,0,0,0-0.008,0 c-17.47,0-28.484-7.351-34.648-13.516c-44.758-44.775,36.604-138.56,37.492-139.439l4.123-4.124 c-3.944-4.354-5.644-10.348-5.644-22.302c0-8.836,0-25.256,0-40.403c11.364-12.619,15.497-11.048,25.103-60.596 c19.433,0,18.178-25.248,27.34-47.644c7.479-18.238,1.212-25.632-5.072-28.655c5.14-66.463,5.14-112.236-70.296-126.435 c-27.349-23.438-68.606-15.48-88.158-11.57c-19.536,3.911-37.159,0-37.159,0l3.355,31.49 C97.74,70.339,112.05,116.112,107.44,142.923c-5.994,3.27-11.407,10.809-4.269,28.254c9.17,22.396,7.906,47.644,27.339,47.644 c9.614,49.548,13.747,47.976,25.111,60.596c0,15.148,0,31.567,0,40.403c0,25.248-8.58,25.684-28.134,36.612 c-47.14,26.35-108.572,41.659-119.571,124.01C5.902,495.504,92.378,511.948,213.434,512 c121.04-0.052,207.524-16.496,205.518-31.558c-3.168-23.702-10.648-41.547-20.68-55.806L374.714,448.193z"></path>
    </svg>
  );
}
function IconLogOut() {
  return (
    <svg
      height="100px"
      width="100px"
      fill="#000000"
      viewBox="-5 0 28 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 10l-6-5v3H6v4h7v3l6-5zM3 3h8V1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H3V3z"></path>
    </svg>
  );
}
