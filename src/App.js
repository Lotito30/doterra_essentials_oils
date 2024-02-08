import AnimatedRoutes from "AnimatedRoutes";
import { DashboardProvider } from "components/dashboard/DashboardContext";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import store from "./store";

function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <Router>
          <DashboardProvider>
              <Routes>
                <Route path="/*" element={<AnimatedRoutes />} />
              </Routes>
          </DashboardProvider>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
