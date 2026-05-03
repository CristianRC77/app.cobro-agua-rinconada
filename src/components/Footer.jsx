import '../index.css'

function Footer() {
  return (
    <footer className="border-t border-emerald-700/30 bg-emerald-900/95 text-white px-4 py-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Créditos */}
        <p className="text-sm md:text-base text-center">
          © {new Date().getFullYear()} La Rinconada. Todos los derechos reservados.
        </p>

        {/* Botón para abrir el modal de Sistema */}
        <div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
