const PaymentMethod = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h4 className="text-xl font-bold mb-6">Pay with your credit card via Stripe</h4>

      <div>
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
           Card Number<span className="text-red-500">{" "}*</span>
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="**** **** **** ****"
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date {" "} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="MM/AA"
            />
          </div>

          <div className="w-1/2 ml-2">
            <label
              htmlFor="cvc"
              className="block text-sm font-medium text-gray-700"
            >
            Card Code (CVC){" "}<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="CVC"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
