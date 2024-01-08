import fondoHome1 from "assets/img/fondoHome1.jpg";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import { Link, Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Oval } from "react-loader-spinner";
import { reset_password_confirm  } from "../../redux/actions/auth";

function ResetPasswordConfirm({ loading,reset_password_confirm  }) {
  const params = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [requestSent, setRequestSent] = useState(false)

  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password:"",
  });

  const { new_password,re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const uid = params.uid;
    const token = params.token;

    reset_password_confirm(uid, token, new_password, re_new_password)
    if(new_password === re_new_password){
      setRequestSent(true)
    }
  };

  if(requestSent && !loading){
    return <Navigate to="/" />
  }

  return (
    <Layout>
      <section className="py-20">
        <div class="flex min- overflow-hidden">
          <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="w-full max-w-xl mx-auto lg:w-96">
              <div className="w-full px-6">
                <div>
                  <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">
                    Set your new password.
                  </h2>
                </div>

                <div class="mt-8">
                  <div class="mt-6">
                    <form onSubmit={(e) => onSubmit(e)}>
                    <div>
                    <label
                      for="password"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      New Password{" "}
                    </label>
                    <input
                      type="password"
                      name="new_password"
                      value={new_password}
                      onChange={(e) => onChange(e)}
                      autoComplete="new-password"
                      required
                      class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your password"
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
                      name="re_new_password"
                      value={re_new_password}
                      onChange={(e) => onChange(e)}
                      required
                      class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Repeat your password"
                    />
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
  reset_password_confirm 
})(ResetPasswordConfirm);
