export default function Header() {
  return (
    <header className="flex fixed top-0 w-screen text-highlight">
      <nav className="flex w-full justify-between items-center px-20 py-4">
        <h1 className="text-2xl font-bold text-highlight">Aleph Code</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
