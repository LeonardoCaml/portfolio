import { useState } from "react";
import Button from "./button";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5591981888897?text=Olá%2C%20adorei%20o%20seu%20portifolio%2C%20gostaria%20de%20conversar!",
      "_blank"
    );
  };

  return (
    <nav className="p-3 mx-auto max-w-6xl flex flex-col items-center justify-between">
      {/* Logo */}
      <div className="flex justify-between p-8 lg:p-3 w-screen lg:w-6xl">
        <div>
          <img src="./Leo.png" alt="logo" width={100} />
        </div>
        {/* Botão Hamburger (Mobile) */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
        {/* Links Desktop */}
        <ul className="hidden lg:flex gap-6">
          <li>
            <a
              href="#home"
              className="hover:text-orange-400 hover:font-semibold"
            >
              home
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="hover:text-orange-400 hover:font-semibold"
            >
              sobre
            </a>
          </li>
          <li>
            <a
              href="#projeto"
              className="hover:text-orange-400 hover:font-semibold"
            >
              projetos
            </a>
          </li>
        </ul>

        {/* Botão Desktop */}
        <div className="hidden lg:block">
          <Button style="" action={handleWhatsAppClick}>
            Fale comigo
          </Button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="w-full lg:hidden">
          <ul className="flex flex-col gap-4 p-4 text-lg text-center">
            <li>
              <a
                href="#home"
                className="hover:text-orange-400 hover:font-semibold"
                onClick={() => setOpen(false)}
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="hover:text-orange-400 hover:font-semibold"
                onClick={() => setOpen(false)}
              >
                sobre
              </a>
            </li>
            <li>
              <a
                href="#projeto"
                className="hover:text-orange-400 hover:font-semibold"
                onClick={() => setOpen(false)}
              >
                projetos
              </a>
            </li>

            <Button style="mt-2" action={handleWhatsAppClick}>
              Fale comigo
            </Button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
