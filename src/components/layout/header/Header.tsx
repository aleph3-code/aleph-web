import Link from 'next/link';
import { Aleph } from '~/components/Aleph';
import { HeaderLink, HeaderLinkProps } from './HeaderLink';

const navLinks: HeaderLinkProps[] = [
    { id: 'services', text: 'Services' },
    { id: 'tools', text: 'Tools' },
    { id: 'projects', text: 'Projects' },
    { id: 'about-us', text: 'About' },
    { id: 'contact', text: 'Contact' },
];

export default function Header() {
    return (
        <header className="flex fixed top-0 w-screen text-highlight">
            <nav className="flex w-full justify-between items-center px-20 py-4">
                <Link href="#">
                    <h1 className="text-2xl font-bold text-highlight font-mono flex items-center gap-2 cursor-pointer">
                        <Aleph /> Aleph
                    </h1>
                </Link>
                <div className="flex space-x-4">
                    {navLinks.map((linkProps) => (
                        <HeaderLink key={linkProps.id} {...linkProps} />
                    ))}
                </div>
            </nav>
        </header>
    );
}
