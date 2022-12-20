export const Navbar = () => {
  return (
    <nav className="p-3 col-span-full shadow h-[10vh] flex items-center justify-around">
      <header>
        <h1>Navbar</h1>
      </header>
      <ul className="flex justify-around items-center w-1/4">
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
      </ul>
    </nav>
  );
};
