<div className="grid gap-10 lg:grid-cols-2">
    <img src=""  />
<div className="flex flex-col items-center justify-center min-h-screen bg-white">
  <h1 className="mb-6 text-3xl font-bold text-center text-orange-500 sm:text-4xl">
    Contáctanos
  </h1>
  <div className="w-full max-w-md mx-auto bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
    <form className="mb-4">
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
      <div className="flex items-center justify-between">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700 focus:outline-none focus:shadow-outline"
          type="button"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</div>
</div>
