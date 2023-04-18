export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white navbar-position">
        <div className="container-fluid">
          <button
            className="navbar-brand btn-home-navbar ms-4 d-none d-md-block d-lg-block d-xl-block"
            href="#"
          >
            Diego Valencia
          </button>
          <a
            className="navbar-brand btn-home-navbar d-block d-md-none d-lg-none d-xl-none"
            href="#"
          >
            <span className="ms-3">DV</span>
          </a>
          <button
            className="navbar-toggler btn-menu"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-4 mb-2 mb-lg-0">
          <li className="nav-item nav-item-widh">
              <button
                className="nav-link  ms-lg-2 ms-sm-4 active"
                aria-current="page"
                href="#"
              >
                Home
              </button>
            </li>
            <li className="nav-item nav-item-widh">
              <button
                className="nav-link ms-lg-2 ms-sm-4"
                aria-current="page"
                href="#"
              >
                About
              </button>
            </li>
            <li className="nav-item nav-item-widh">
              <button className="nav-link ms-lg-2 ms-sm-4" href="#">
                Projects
              </button>
            </li>
            <li className="nav-item nav-item-widh">
              <button className="nav-link ms-lg-2 ms-sm-4" href="#">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
