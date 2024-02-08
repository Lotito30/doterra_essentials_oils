import Layout from "hocs/layouts/Layout";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Oval } from "react-loader-spinner";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { signin } from "../../redux/actions/auth";

function SignIn({
  loading,
  auth,
  signin,
}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    signin(email, password);
  };

  if (auth) {
    return <Navigate to="/" />;
  }
  return (
    <Layout>
      <Helmet>
        <title>Sign in | doTERRA</title>
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
      <div class="overflow-hidden p-12">
        <div class="px-4 sm:px-6 lg:px-20 xl:px-24">
          <div class="w-full max-w-xl mx-auto lg:w-96">
            <div className="w-full px-6">
              <div>
                <h2 class="text-3xl text-center font-extrabold text-neutral-600">
                  Sign in
                </h2>
              </div>
              <div class="mt-8">
                <div class="mt-6">
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => onChange(e)}
                          autocomplete="email"
                          required
                          placeholder="Enter your Email*"
                          class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>

                    <div class="space-y-1">
                      <label
                        for="password"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={password}
                          onChange={(e) => onChange(e)}
                          autocomplete="current-password"
                          required=""
                          placeholder="Enter your Password*"
                          class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>

                    <div class="flex items-center justify-between pt-3">
                      <div class="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          placeholder="Your password"
                          class="w-4 h-4 text-orange-standard border-gray-200 rounded focus:ring-0"
                        />
                        <label
                          for="remember-me"
                          class="block ml-2 text-sm text-neutral-600"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>

                      <div class="text-sm">
                        <Link
                          to="/reset_password"
                          class="font-medium text-orange-standard hover:text-black transition ease-in-out duration-300"
                        >
                          {" "}
                          Forgot your password?{" "}
                        </Link>
                      </div>
                    </div>

                    <div className="pt-3">
                      {loading ? (
                        <button className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-standard rounded-xl hover:bg-black focus:outline-none focus:ring-offset-2 focus:ring-0">
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
                          className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-standard rounded-xl hover:bg-black focus:outline-none focus:ring-offset-2 focus:ring-0"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                    <span>(*) Required</span>
                  </form>
                  <Link
                    to="/signup"
                    type="button"
                    class="w-full pt-4 text-center sm:text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-orange-600 text-sm"
                  >
                    {" "}
                    Don't have an account??{" "}
                  </Link>
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
  auth: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  signin,
})(SignIn);
