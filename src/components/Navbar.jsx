import { useState } from "react";

function Navbar({ onOpenSistema }) {
  const [active, setActive] = useState("inicio");

  const links = [
    { id: "inicio", label: "Inicio" },
    { id: "galeria", label: "Galería" },
    { id: "contactos", label: "Contactos" },
    { id: "sistema", label: "Sistema" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-700/30 bg-emerald-900/95 px-6 py-3 text-white backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        {/* Logo / Título */}
        <h1 className="text-xl font-extrabold tracking-wide md:text-2xl">
          La Rinconada
        </h1>

        {/* Links */}
        <ul className="flex flex-wrap gap-2 md:gap-4">
          {links.map(link => (
            <li
              key={link.id}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition md:text-base ${
                active === link.id
                  ? "bg-white text-emerald-900"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              onClick={() => {
                setActive(link.id);
                if (link.id === 'sistema') {
                  // Abrir modal en lugar de hacer scroll
                  onOpenSistema?.();
                } else {
                  document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
