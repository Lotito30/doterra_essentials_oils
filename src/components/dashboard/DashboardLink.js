import {
  CreditCardIcon,
  HomeIcon,
  ChartPieIcon,
  ArchiveIcon,
  ArrowLeftIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DashboardContext } from "./DashboardContext";

const DashboardLink = ({ user }) => {
  const { setContent } = useContext(DashboardContext);

  const navigation = [
    {
      name: "Dashboard",
      iconSolid: <HomeIcon />,
      setContent: "Dashboard",
      to: "/dashboard",
    },
    {
      name: "Payment History",
      iconSolid: <CreditCardIcon />,
      setContent: "Payment History",
      to: "/dashboard/payments",
    },
    {
      name: "Sales",
      iconSolid: <ChartPieIcon />,
      setContent: "Sales",
      to: "/dashboard/sales",
    },
    {
      name: "Products",
      iconSolid: <ShoppingBagIcon />,
      setContent: "Products",
      to: "/dashboard/products",
    },
    {
      name: "Customers",
      iconSolid: <UserGroupIcon />,
      setContent: "Customers",
      to: "/dashboard/customers",
    },
    {
      name: "Orders",
      iconSolid: <DocumentTextIcon />,
      setContent: "Orders",
      to: "/dashboard/orders",
    },
    {
      name: "Analytics",
      iconSolid: <ChartBarIcon />,
      setContent: "Analytics",
      to: "/dashboard/analytics",
    },
    {
      name: "Inventory",
      iconSolid: <ArchiveIcon />,
      setContent: "Inventory",
      to: "/dashboard/inventory",
    },
    {
      name: "Home",
      iconSolid: <ArrowLeftIcon />,
      setContent: "Dashboard",
      to: "/",
    },
  ];
  const allowedItems = ["Dashboard", "Payment History", "Home"];
  return (
    <>
      {user.get_is_staff === false
        ? navigation?.map((nav, index) => {
            if (allowedItems.includes(nav.name)) {
              return (
                <Link
                  key={index}
                  to={nav.to}
                  onClick={() => setContent(nav.setContent)}
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <div
                    className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
                    aria-hidden="true"
                  >
                    {nav.iconSolid}
                  </div>
                  {nav.name}
                </Link>
              );
            }
            return null;
          })
        : navigation?.map((nav, index) => (
            <Link
              key={index}
              to={nav.to}
              onClick={() => setContent(nav.setContent)}
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <div
                className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
                aria-hidden="true"
              >
                {nav.iconSolid}
              </div>
              {nav.name}
            </Link>
          ))}

      <div className="flex flex-col"></div>
    </>
  );
};

export default DashboardLink;
