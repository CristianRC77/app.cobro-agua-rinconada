import '../index.css';
function Contactos() {
  return (
    <section id="contactos" className=" px-4 md:px-20 py-4 ">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-emerald-800 mb-4 text-center">
          Contactos
        </h2>

        <form className="space-y-6 bg-white  rounded-lg p-6">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Correo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo
            </label>
            <input
              type="email"
              placeholder="ejemplo@mail.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              placeholder="Escribe tu mensaje..."
              className="w-full px-4 py-2 border rounded-lg h-32 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-emerald-700 text-white py-2 rounded-lg hover:bg-emerald-800 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contactos;
