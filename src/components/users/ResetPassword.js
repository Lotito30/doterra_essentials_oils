import fondoHome1 from "assets/img/fondoHome1.jpg";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Oval } from "react-loader-spinner";
import { reset_password } from "../../redux/actions/auth";

function ResetPassword({ loading, reset_password }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await reset_password(email);
    setRequestSent(true);
  };

  // if (requestSent && !loading) {
  //   return <Navigate to="/" />;
  // }
  return (
    <section className="py-10">
      <div class="flex min- overflow-hidden">
        <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div class="w-full max-w-xl mx-auto lg:w-96">
            <div className="w-full px-6">
              <div>
                <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">
                  Recover your password.
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

                    <div className="pt-3">
                      {loading ? (
                        <button className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-standard rounded-xl hover:bg-black focus:outline-none focus:ring-0 focus:ring-offset-2">
                          <Oval
                            visible={true}
                            height="20"
                            width="20"
                            color="white"
                            ariaLabel="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                          />{" "}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-standard rounded-xl hover:bg-black focus:outline-none focus:ring-0 focus:ring-offset-2"
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
  );
}

const mapStateToProps = (state) => ({
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
  reset_password,
})(ResetPassword);
