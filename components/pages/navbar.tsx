import Image from "next/image";
import { navbarItems } from "../static-data/navbar";
export default function Navbar() {
  return (
    <nav className=" sm:px-16 px-6 py-4 ">
      <div className=" mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Image
              src="/logo-mark.svg"
              alt="Logo"
              width={40}
              height={40}
              className="shadow-md"
            />
          </div>
          <div className="space-x-4">
            {navbarItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary hover:text-accent font-space transform transition-all duration-200 ease-in-out hover:scale-110 hover:[text-shadow:0_0_1px_currentColor] inline-block "
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
