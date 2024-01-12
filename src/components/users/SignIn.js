import fondoHome1 from "assets/img/fondoHome1.jpg";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signin } from "../../redux/actions/auth";
import { Oval } from "react-loader-spinner";


function SignIn({ signin, loading }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signin(email, password)
  };
  return (
    <Layout>
      <section className="py-20">
        <div class="flex min- overflow-hidden">
          <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="w-full max-w-xl mx-auto lg:w-96">
              <div className="w-full px-6">
                <div>
                  <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">
                    Sign in.
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
                            placeholder="Enter your Email"
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
                            placeholder="Enter your Password"
                            class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          />
                        </div>
                      </div>

                      <div class="flex items-center justify-between">
                        <div class="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            placeholder="Your password"
                            class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
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
                            class="font-medium text-blue-600 hover:text-blue-500"
                          >
                            {" "}
                            Forgot your password?{" "}
                          </Link>
                        </div>
                      </div>

                      <div>
                        {loading ? (
                          <button className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <Oval
                              visible={true}
                              height="20"
                              width="20"
                              color="#ED8936"
                              ariaLabel="oval-loading"
                              wrapperStyle={{}}
                              wrapperClass=""
                            />{" "}
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative flex-1 hidden w-0 overflow-hidden lg:block">
            <img
              class="absolute px-3 inset-0 object-cover w-full h-full"
              src={fondoHome1}
              alt=""
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
  signin,
})(SignIn);
