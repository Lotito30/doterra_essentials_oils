import Layout from "hocs/layouts/Layout";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Oval } from "react-loader-spinner";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../redux/actions/auth";

function SignUp({ signup, loading }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, phone, email, password, re_password } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
     if(await signup(first_name, last_name, phone, email, password, re_password)){
       navigate('/')
     }
  };

  return (
    <Layout>
      <Helmet>
        <title>Sign up | doTERRA</title>
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
      <div class="overflow-hidden p-6">
        <div class="px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div class="w-full max-w-xl mx-auto lg:w-96">
            <div className="w-full px-6">
              <div className="">
                <div className="w-full">
                  <h2 className="text-3xl text-center font-extrabold text-neutral-600">
                    Sign Up
                  </h2>
                </div>
                <div className="mt-2 text-center text-base text-gray-500">
                  <p>Sign up and get our newest news</p>
                </div>
              </div>
              <div>
                <div class="mt-7">
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your email*"
                      />
                    </div>
                    <div>
                      <label
                        for="first_name"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        First Name{" "}
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={first_name}
                        onChange={(e) => onChange(e)}
                        required
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your first name*"
                      />
                    </div>
                    <div>
                      <label
                        for="last_name"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Last Name{" "}
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        value={last_name}
                        onChange={(e) => onChange(e)}
                        required
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your last name*"
                      />
                    </div>
                    <div>
                      <label
                        for="phone"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Phone{" "}
                      </label>
                      <input
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={(e) => onChange(e)}
                        required
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your phone*"
                      />
                    </div>
                    <p className="text-xs text-end">Don't enter +971 </p>
                    <div>
                      <label
                        for="password"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        autoComplete="new-password"
                        required
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your password*"
                      />
                    </div>
                    <div>
                      <label
                        for="re_password"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Repeat Password{" "}
                      </label>
                      <input
                        type="password"
                        name="re_password"
                        value={re_password}
                        onChange={(e) => onChange(e)}
                        required
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Repeat your password*"
                      />
                    </div>
                    <ul className="py-1 ml-1">
                    <li className="text-xs">Ensure your password isn't too short. It should contain at least 8 characters.</li>
                    <li className="text-xs">Ensure your password isn't too common.</li>
                    <li className="text-xs">Ensure your password isn't entirely numeric.</li>
                    </ul>
  
                    <div className="pt-3">
                      {loading ? (
                        <button className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-standard rounded-xl hover:bg-orange-standard focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-standard">
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
                          type="submit"
                          className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-300 ease-in-out transform bg-orange-standard rounded-xl hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-standard"
                        >
                          Sign Up
                        </button>
                      )}
                    </div>
                  </form>

                  <div class="flex flex-col mt-4 lg:space-y-2">
                    <Link
                      to="/signin"
                      type="button"
                      class="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-orange-standard sm:text-s"
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
                      <form>
                        <button
                          type="submit"
                          class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-orange-standard transition duration-500 ease-in-out transform border-2 border-white shadow-navbar rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 "
                        >
                          <div class="flex items-center justify-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              viewBox="0 0 48 48"
                              fill="black"
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
                                fill="black"
                                d="M0 37V11l17 13z"
                              ></path>
                              <path
                                clip-path="url(#b)"
                                fill="black"
                                d="M0 11l17 13 7-6.1L48 14V0H0z"
                              ></path>
                              <path
                                clip-path="url(#b)"
                                fill="black"
                                d="M0 37l30-23 7.9 1L48 0v48H0z"
                              ></path>
                              <path
                                clip-path="url(#b)"
                                fill="black"
                                d="M48 48L17 24l-4-3 35-10z"
                              ></path>
                            </svg>
                            <span>Log in with Google</span>
                          </div>
                        </button>
                        <span>(*) Required</span>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
  signup,
})(SignUp);
