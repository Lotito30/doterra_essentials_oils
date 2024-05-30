import { HomeIcon } from "@heroicons/react/solid";
import { DashboardContext } from "components/dashboard/DashboardContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ShippingForm = ({
  full_name,
  street,
  building_villa,
  department,
  city,
  district,
  postal_zip_code,
  telephone_number,
  countries,
  onChange,
  user,
  profile,
  handleButtonClick,
}) => {
  const { content, setContent } = useContext(DashboardContext);
  return (
    <div>
      <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-navbar sm:p-6">
        <div className="flex items-center gap-2">
          <HomeIcon className="h-6 w-6" />
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            You shipping address -
          </h3>
          <Link
            to={"/dashboard/profile/edit"}
            onClick={() => setContent("Profile")}
            className="text-orange-standard hover:text-orange-300"
          >
            Update shipping address
          </Link>
        </div>

        {profile.street === "" ||
        profile.city === "" ||
        profile.district === "" ? (
          <>
            <h3 className="my-2">You don't have a shipping address added. </h3>
            <p>Please update your shipping address. </p>
          </>
        ) : (
          <div className="mt-2 text-gray-500 flex flex-col gap-1">
            <p className="text-lg">
              {profile.street} - {profile?.building_villa}
            </p>
            <p>
              {" "}
              CP{profile?.zipcode} - {profile?.district} - {profile?.city} -{" "}
              {profile?.phone}
            </p>
            <p className="font-bold text-xs mt-1">{profile.country_region}</p>
            <Link
              onClick={() => handleButtonClick(profile)}
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-standard hover:text-orange-300 duration-300 transition ease-in-out"
            >
              Use address
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </Link>
          </div>
        )}
      </article>

      <div className="py-5">
        <h3 className="text-lg leading-6 font-bold text-gray-900">
          Billing Details
        </h3>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Full name
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <input
              type="text"
              name="full_name"
              placeholder={`${user.first_name} ${user.last_name}`}
              value={full_name}
              disabled
              required
              className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Street*
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <input
              type="text"
              name="street"
              // placeholder={`${profile.street}`}
              onChange={(e) => onChange(e)}
              value={street}
              required
              className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Building/Villa Name
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <input
              type="text"
              name="building_villa"
              // placeholder={`${profile.building_villa}`}
              onChange={(e) => onChange(e)}
              value={building_villa}
              className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          City*
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <input
              type="text"
              name="city"
              // placeholder={`${profile.city}`}
              onChange={(e) => onChange(e)}
              value={city}
              required
              className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          District*
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <input
              type="text"
              name="district"
              // placeholder={`${profile.state_province_region}`}
              onChange={(e) => onChange(e)}
              value={district}
              required
              className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="department"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Department*
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <input
              type="text"
              name="department"
              // placeholder={`${profile.state_province_region}`}
              onChange={(e) => onChange(e)}
              value={department}
              required
              className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Zipcode*
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <input
              type="text"
              name="postal_zip_code"
              // placeholder={`${profile.zipcode}`}
              onChange={(e) => onChange(e)}
              value={postal_zip_code}
              required
              className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 mb-4 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Country*
        </label>
        <div className="">
          <div className=" rounded-md shadow-sm">
            {countries &&
              countries !== null &&
              countries !== undefined &&
              countries.map((country, index) => {
                if (country.name === "United Arab Emirates") {
                  return (
                    <div
                      key={index}
                      value={country.name}
                      className="font-bold block text-sm text-gray-700 sm:mt-px sm:pt-2"
                    >
                      {country.name}
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 mb-4 sm:gap-4 sm:items-start  sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="telephone_number"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Phone Number*
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <input
              type="tel"
              name="telephone_number"
              placeholder={`${telephone_number}`}
              value={telephone_number}
              disabled
              className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
        <span>(*) Required</span>
      </div>
    </div>
  );
};

export default ShippingForm;
