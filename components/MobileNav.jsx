"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
  {
    name: "Presentación",
    path: "/assets/CasoNegocio/Caso Cine OBK - BCP.pdf", // Ruta del archivo PDF/ Marca este enlace como una descarga
  },
];

const MobileNav = () => {
  const pathname = usePathname(); // Obtener la ruta actual
  const isDashboard = pathname === "/dashboard"; // Verificar si estamos en el Dashboard

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries
          className={`text-[32px] ${
            isDashboard ? "text-primary" : "text-secondary"
          }`}
        />
      </SheetTrigger>
      <SheetContent
        className={`flex flex-col ${
          isDashboard ? "bg-white text-primary" : "bg-primary text-white"
        }`}
      >
        <VisuallyHidden>
          <Dialog.DialogContent>
            <Dialog.DialogTitle></Dialog.DialogTitle>
          </Dialog.DialogContent>
        </VisuallyHidden>
        <div className="mt-32 mb-40 text-center text-2xl">
          <SheetClose asChild>
            <Link href="/">
              <h1
                className={`text-4xl font-semibold ${
                  isDashboard ? "text-primary" : "text-white"
                }`}
              >
                Cines OBK<span className="text-secondary">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              {link.download ? (
                <a
                  href={link.path}
                  download
                  className={`${
                    link.path === pathname
                      ? "text-secondary border-b-2 border-secondary"
                      : isDashboard
                      ? "text-primary"
                      : "text-white"
                  } text-xl capitalize hover:text-secondary transition-all`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname
                      ? "text-secondary border-b-2 border-secondary"
                      : isDashboard
                      ? "text-primary"
                      : "text-white"
                  } text-xl capitalize hover:text-secondary transition-all`}
                >
                  {link.name}
                </Link>
              )}
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
