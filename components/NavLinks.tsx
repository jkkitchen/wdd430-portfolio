'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-between items-center">
            <ul className="flex space-x-4">
                <li>
                    <Link
                        href="/"
                        className={pathname === '/' ? 'active' : ''}
                        aria-current={pathname === '/' ? 'page' : undefined}
                    >Home</Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className={pathname === '/about' ? 'active' : ''}
                        aria-current={pathname === '/about' ? 'page' : undefined}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/projects"
                        className={pathname === '/projects' ? 'active' : ''}
                        aria-current={pathname === '/projects' ? 'page' : undefined}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className={pathname === '/contact' ? 'active' : ''}
                        aria-current={pathname === '/contact' ? 'page' : undefined}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}