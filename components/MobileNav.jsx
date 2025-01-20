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
    name: "Sobre Mí",
    path: "/",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Perfil",
    path: "/perfil",
  },
  {
    name: "Proyectos",
    path: "/proyectos",
  },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-secondary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <VisuallyHidden>
          <Dialog.DialogContent>
            <Dialog.DialogTitle></Dialog.DialogTitle>
          </Dialog.DialogContent>
        </VisuallyHidden>
        <div className="mt-32 mb-40 text-center text-2xl">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Jesús<span className="text-secondary">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                className={`${
                  link.path === pathname &&
                  "text-secondary border-b-2 border-secondary"
                } text-xl capitalize hover:text-secondary transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
