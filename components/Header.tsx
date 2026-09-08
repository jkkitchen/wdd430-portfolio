import NavLinks from "./NavLinks";

export default function Header() {
  
  return (
    <header className="bg-gray-800 text-white p-4">
          <div id="header-title" className="container mx-auto">Jessica Kitchen</div>
          <NavLinks />        
    </header>
  );
}