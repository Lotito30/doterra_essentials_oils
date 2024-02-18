import { HomeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const ShippingForm = ({
  full_name,
  address_line_1,
  address_line_2,
  city,
  state_province_region,
  postal_zip_code,
  telephone_number,
  countries,
  onChange,
  user,
  profile,
  handleButtonClick,
}) => {
  return (
    <div>
      <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-navbar sm:p-6">
        <div className="flex items-center gap-2">
          <HomeIcon className="h-6 w-6" />
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Current Shipping Address
          </h3>
        </div>

        <div className="mt-2 text-gray-500 flex flex-col gap-1">
          <p className="text-lg">{profile.address_line_1}</p>
          <p>
            {" "}
            {profile.zipcode} - {profile.state_province_region} - {profile.city}
          </p>
          <p className="font-bold text-xs">{profile.country_region}</p>
        </div>
        <Link
          onClick={() => handleButtonClick(profile)}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-standard hover:text-black duration-300 transition ease-in-out"
        >
          Use Address
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </Link>
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
          Address Line 1*
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <input
              type="text"
              name="address_line_1"
              // placeholder={`${profile.address_line_1}`}
              onChange={(e) => onChange(e)}
              value={address_line_1}
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
          Address Line 2
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <input
              type="text"
              name="address_line_2"
              // placeholder={`${profile.address_line_2}`}
              onChange={(e) => onChange(e)}
              value={address_line_2}
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
          State/Province/Region*
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <input
              type="text"
              name="state_province_region"
              // placeholder={`${profile.state_province_region}`}
              onChange={(e) => onChange(e)}
              value={state_province_region}
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
          Postal Code*
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
              // placeholder={`${profile.phone}`}
              onChange={(e) => onChange(e)}
              value={telephone_number}
              required
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
