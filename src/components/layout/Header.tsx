import Link from 'next/link';
import { Aleph } from '../Aleph';

export default function Header() {
    return (
        <header className="flex fixed top-0 w-screen text-highlight">
            <nav className="flex w-full justify-between items-center px-20 py-4">
                <Link href="#">
                    <h1 className="text-2xl font-bold text-highlight font-mono flex items-center gap-2 cursor-pointer">
                        <Aleph /> Aleph
                    </h1>
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="#services">Services</Link>
                    </li>
                    <li>
                        <Link href="#tools">Tools</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
