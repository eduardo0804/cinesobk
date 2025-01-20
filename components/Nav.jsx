"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importamos usePathname

const links = [
  {
    name: "Caso",
    path: "/",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Conóceme",
    path: "/conóceme",
  },
];

const Nav = () => {
  const pathname = usePathname(); // Obtenemos la ruta actual

  // Definimos las clases condicionales para los links
  const isDashboard = pathname === "/dashboard";

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname
                ? "text-secondary border-b-2 border-secondary"
                : isDashboard
                ? "text-primary"
                : ""
            } capitalize font-medium hover:text-secondary transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
