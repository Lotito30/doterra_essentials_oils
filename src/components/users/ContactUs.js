import contactoImg from "assets/img/fondoHome1.jpg";

function Contact() {
  return (
    //  <section>
    //    <div class="flex min- overflow-hidden">
    //        <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    //            <div class="w-full max-w-xl mx-auto lg:w-96">
    //            <h1 className="mb-6 text-3xl font-bold text-center text-black sm:text-4xl">
    //              Contáctanos
    //            </h1>
    //            <div className="w-full max-w-md mx-auto bg-white rounded-md shadow-navbar px-8 pt-6 pb-8 mb-4">
    //              <form className="mb-4">
    //                <div className="mb-4">
    //                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nombre">
    //                    Nombre
    //                  </label>
    //                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" placeholder="Nombre" />
    //                </div>
    //                <div className="mb-4">
    //                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="correo">
    //                    Correo Electrónico
    //                  </label>
    //                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="correo" type="email" placeholder="Correo Electrónico" />
    //                </div>
    //                <div className="mb-6">
    //                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="mensaje">
    //                    Mensaje
    //                  </label>
    //                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mensaje" placeholder="Escribe tu mensaje" rows="5"></textarea>
    //                </div>
    //                <div className="flex items-center justify-between">
    //                  <button className="transition duration-300 ease-in-out w-full px-3 py-2.5 font-bold text-white bg-orange-500 rounded-md hover:bg-black focus:outline-none focus:shadow-outline" type="button">
    //                    Enviar
    //                  </button>
    //                </div>
    //              </form>
    //            </div>
    //            </div>
    //        </div>
    //        <div class="relative flex-1 hidden w-0 overflow-hidden lg:block">
    //            <img class="absolute px-3 inset-0 object-cover w-full h-full" src={contactoImg} alt="" />
    //        </div>
    //    </div>
    //  </section>

    <section>
      <div class="flex min- overflow-hidden">
        <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div class="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">
                Contact us
              </h2>
            </div>

            <div class="mt-8">
              <div class="mt-6">
                <form action="#" method="POST" class="space-y-6">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="nombre"
                    >
                      Nombre
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="nombre"
                      type="text"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="correo"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="correo"
                      type="email"
                      placeholder="Correo Electrónico"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="mensaje"
                    >
                      Mensaje
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="mensaje"
                      placeholder="Escribe tu mensaje"
                      rows="5"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-standard rounded-xl hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
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
