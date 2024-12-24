function Header() {
  return (
    <header>
      <nav className=" mx-auto text-white flex items-center gap-4 p-4">
        <div className="text-lg font-bold">Brand</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
