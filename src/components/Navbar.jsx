export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white navbar-position">
        <div className="container-fluid">
          <button
            className="navbar-brand btn-home-navbar ms-4 d-none d-md-block d-lg-block d-xl-block"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="icon-brand"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
            DV
          </button>
          <a
            className="navbar-brand btn-home-navbar d-block d-md-none d-lg-none d-xl-none"
            href="#"
          >
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="icon-brand"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
            <span className="ms-2">DV</span>
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
            <li className="nav-item ">
              <button className="nav-link ms-lg-2 ms-sm-4 btn-navbar-contact" href="#">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
