import { Navbar } from "flowbite-react";

function NavbarSitio() {
  return (
    <Navbar fluid rounded className="bg-black text-white">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-2xl font-bold italic text-yellow-500">
          CROWN EDITION 👑
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active className="text-white hover:text-yellow-500">
          Inicio
        </Navbar.Link>
        <Navbar.Link href="/catalogo" className="text-gray-300 hover:text-yellow-500">
          Gorras
        </Navbar.Link>
        <Navbar.Link href="/contacto" className="text-gray-300 hover:text-yellow-500">
          Contacto
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarSitio;