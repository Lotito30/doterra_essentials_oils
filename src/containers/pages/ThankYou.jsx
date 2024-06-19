import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reset } from "../../redux/actions/payment";

const Thankyou = ({ isAuthenticated, reset }) => {
  useEffect(() => {
    const fetch = async () => {
      if (!isAuthenticated) {
        return <Navigate to="/"/>;
      }
      await reset();
    };
    fetch();
  }, []);

  return (
    <Layout>
      <section className="max-w-3xl  py-12  mx-auto">
        <div className="p-8 text-center sm:p-12 bg-gray-100 rounded-3xl shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-standard">
            Your order is on the way
          </p>

          <h2 className="mt-6 text-3xl font-bold">
            Thanks for your purchase, we're getting it ready!
          </h2>

          <a
            className="mt-8 inline-block w-full rounded-full bg-orange-standard py-4 text-sm font-bold text-white shadow-xl"
            href="/"
          >
            Go Home
          </a>
        </div>
      </section>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  reset,
})(Thankyou);
