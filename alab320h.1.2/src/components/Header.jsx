function Header() {
  return (
    <header>
      <h1 id="title">Satre's List</h1>
      <h2 id="sub-title">Better-Dressed People</h2>
      <nav>
        <ul
          className="main-navigation"
          aria-label="Main Navigation"
          role="navigation"
        >
          <li>
            <a href="#womens">Women's</a>
          </li>
          <li>
            <a href="#mens">Men's</a>
          </li>
          <li>
            <a href="#on-the-street">On The Street</a>
          </li>
          <li>
            <a href="#the-catwalk">The Catwalk</a>
          </li>
          <li>
            <a href="#adwatch">AdWatch</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
