import { Link } from "react-router-dom";
import {
  HomeIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";
import { useContext } from "react";
import { DashboardContext } from './DashboardContext';
import { ArrowLeftIcon } from "@heroicons/react/solid";

const DashboardLink = () => {
    const { setContent } = useContext(DashboardContext);

  return (
    <div>
      <>
        <Link
          to="/dashboard"
          onClick={() => setContent("Dashboard")}
          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        >
          <HomeIcon
            className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
            aria-hidden="true"
          />
          Dashboard
        </Link>

        <Link
          to="/dashboard/payments"
          onClick={() => setContent("Payment_History")}
          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        >
          <CreditCardIcon
            className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
            aria-hidden="true"
          />
          Payment History
        </Link>

        <Link
          to="/"
          onClick={() => setContent("Dashboard")}
          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        >
          <ArrowLeftIcon
            className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
            aria-hidden="true"
          />
          Home
        </Link>
      </>
    </div>
  );
};

export default DashboardLink;
