import '../index.css';

function Home() {
  return (
    <section id="inicio" className="w-full  px-6 md:px-10" style={{ minHeight: 'calc(100vh - var(--nav-height))', display: 'content', alignItems: 'flex-start' }}>
      <div className="mx-auto max-w-7xl py-12 md:py-20">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent mb-2">🏔️ Comunidad La Rinconada</h2>
          <p className="text-lg text-green-600 font-medium">Un tesoro cultural andino en el corazón de Imbabura</p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 md:p-8 mb-8 border-l-4 border-green-600">
          <p className="text-gray-800 mb-4 text-lg leading-relaxed">
            ✨ <strong>La Rinconada</strong> es una comunidad kichwa ubicada al suroriente de Ibarra, en la provincia de Imbabura (Ecuador), dentro de la parroquia Angochagua. Su territorio destaca por <span className="text-green-700 font-semibold">montañas majestuosas</span>, <span className="text-green-700 font-semibold">valles andinos</span> y una <span className="text-green-700 font-semibold">rica tradición cultural</span>.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            🎨 La comunidad es conocida por sus <strong>artesanías tradicionales</strong> —bordados y alfarería—, por el <strong>turismo comunitario</strong> que ofrece rutas y cascadas fascinantes, y por su <strong>gastronomía local</strong>, con platos como la trucha fresca y el cordero asado que deleitarán tu paladar.
          </p>
        </div>

        <h3 className="text-3xl font-bold text-green-800 mt-10 mb-6 flex items-center">
          <span className="text-4xl mr-3">⭐</span> Detalles principales
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white border-2 border-green-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
            <p className="text-lg"><strong className="text-green-700">📍 Ubicación y acceso:</strong></p>
            <p className="text-gray-700 mt-2">Desde Ibarra el trayecto toma alrededor de 30–40 minutos en vehículo o bus, seguido de una caminata corta.</p>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
            <p className="text-lg"><strong className="text-green-700">🥾 Turismo y naturaleza:</strong></p>
            <p className="text-gray-700 mt-2">Senderos, miradores y cascadas para actividades al aire libre y aventura.</p>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
            <p className="text-lg"><strong className="text-green-700">🎭 Cultura viva:</strong></p>
            <p className="text-gray-700 mt-2">Artesanías y tradiciones kichwas que se mantienen vivas y auténticas.</p>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
            <p className="text-lg"><strong className="text-green-700">🌱 Economía local:</strong></p>
            <p className="text-gray-700 mt-2">Agricultura, turismo comunitario y comercio artesanal que genera oportunidades.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-8 text-white text-center shadow-lg">
          <p className="text-xl leading-relaxed">
            💚 La Rinconada es <strong>ideal para quienes buscan una experiencia auténtica</strong> en contacto con la naturaleza y la comunidad. <br className="hidden md:block" />
            <span className="text-green-100">Te invitamos a explorar sus paisajes, su gente y sus sabores.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;