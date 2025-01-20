import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Jesús<span className="text-secondary">.</span>
          </h1>
        </Link>
        {/* Barra de Navegación Desktop y Botón de Contratame */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contrátame</Button>
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
