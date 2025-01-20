"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation"; // Importamos usePathname

const Header = () => {
  const pathname = usePathname(); // Obtenemos la ruta actual

  // Definimos las clases condicionales
  const isDashboard = pathname === "/dashboard";

  return (
    <header
      className={`py-8 xl:py-12 text-white ${
        isDashboard ? "bg-white text-primary" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1
            className={`text-4xl font-semibold ${
              isDashboard ? "text-primary" : "text-white"
            }`}
          >
            Cines OBK<span className="text-secondary">.</span>
          </h1>
        </Link>

        {/* Barra de Navegación Desktop y Botón de Contratame */}
        <div
          className={`hidden xl:flex items-center gap-8 ${
            isDashboard ? "text-primary" : ""
          }`}
        >
          <Nav />
          <Link href="/assets/CasoNegocio/Caso Cine OBK - BCP.pdf">
            <Button
              className={`${
                isDashboard
                  ? "bg-primary text-white gap-2"
                  : "bg-white text-primary gap-2"
              }`}
            >
              Presentación
              <FiDownload className="text-xl" />
            </Button>
          </Link>
        </div>

        {/* Barra de Navegación Mobile */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
