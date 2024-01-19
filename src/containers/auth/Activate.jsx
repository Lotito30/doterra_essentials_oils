import Layout from "hocs/layouts/Layout";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Oval } from "react-loader-spinner";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { activate } from "../../redux/actions/auth";
import Navbar from "components/navigation/Navbar";

function Activate({ activate, loading }) {
  const params = useParams();

  const [activated, setActivated] = useState(false);

  const activate_account = async () => {
    const uid = params.uid;
    const token = params.token;
    await activate(uid, token);
    setActivated(true);
  };

  if (activated && !loading) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <Helmet>
        <title>Activate | doTERRA</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-screen">
        <div className="max-w-3xl mx-auto">
          {loading ? (
            <button className="inline-flex rounded-md bg-orange-standard px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2">
              <Oval
                visible={true}
                height="80"
                width="80"
                color="#ED8936"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />{" "}
            </button>
          ) : (
            <button
              onClick={activate_account}
              className="inline-flex rounded-md bg-orange-standard px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Activate Account
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
  activate,
})(Activate);
