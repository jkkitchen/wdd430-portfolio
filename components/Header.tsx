import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
        <div id="header-title" className="container mx-auto">Jessica Kitchen</div>
        <nav className="flex justify-between items-center">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>        
    </header>
  );
}