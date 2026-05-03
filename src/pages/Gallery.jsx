import Imagen1 from '/images/naturaleza1.jpg'
import Imagen2 from '/images/naturaleza2.jpg'
import Imagen3 from '/public/images/naturaleza3.jpg'
import Imagen4 from '/images/naturaleza4.jpg'
import Imagen5 from '/images/naturaleza5.jpg'
import Imagen6 from '/images/naturaleza6.jpg'
import '../index.css'
function Galeria() {
  return (
    <section id="galeria" className="w-full bg-white px-6 md:py-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">Galería de Fotos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Aquí puedes agregar tus imágenes */}
          <img src={Imagen1} alt="Foto 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Imagen2} alt="Foto 2" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Imagen3} alt="Foto 3" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Imagen4} alt="Foto 4" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Imagen5} alt="Foto 5" className="w-full h-auto rounded-lg shadow-md" />
            <img src={Imagen6} alt="Foto 6" className="w-full h-auto rounded-lg shadow-md" />
          {/* Agrega más imágenes según sea necesario */}
        </div>
      </div>
    </section>
  );
}
export default Galeria;