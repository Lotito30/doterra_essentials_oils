import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import headerImg from "assets/img/error404.webp";
import AnimatedRoutes from "AnimatedRoutes";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import ScrollToTop from "components/navigation/ScrollToTop";
// import Layout from "hocs/layouts/Layout";
// import Activate from "containers/auth/Activate";

function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/*" element={<AnimatedRoutes />} />
          </Routes>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
