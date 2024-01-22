import contactoImg from "assets/img/fondoHome1.jpg";

function Contact() {
  return (
    <section>
      <div class="flex min- overflow-hidden py-12">
        <div class="flex flex-col justify-center flex-1 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div class="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 class="text-3xl font-extrabold text-neutral-600">
                Contact us
              </h2>
            </div>

            <div>
              <div className="mt-4">
                <form>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform  rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      id="name"
                      type="text"
                      placeholder="Enter your name*"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform focus:border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      id="email"
                      type="email"
                      placeholder="Enter your email*"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform  rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      id="message"
                      placeholder="Enter your message*"
                      rows="5"
                      style={{resize:'none'}}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-standard rounded-xl hover:bg-black focus:outline-none focus:ring-offset-2 focus:ring-white focus:ring-0"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex-1 hidden w-0 overflow-hidden lg:block">
          <img
            class="absolute px-3 inset-0 object-cover w-full h-full"
            src={contactoImg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
