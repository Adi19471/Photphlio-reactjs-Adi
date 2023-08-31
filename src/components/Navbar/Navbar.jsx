import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';





const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top ">
        <div className="container-fluid ">
          <h2>
            <a className="navbar-brand" >
              ADI NARAYABNA REDDY
            </a>
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div
            className="offcanvas offcanvas-end bg-side"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: '200px' }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Photphlio
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <img
              className="img-logo"
              src="https://media.licdn.com/dms/image/D5603AQHtMAhli2kv4A/profile-displayphoto-shrink_400_400/0/1669873572294?e=1698883200&v=beta&t=ONoHDoen82we5NRfPo4eRaHiDBznPaVkpe3SQS2KB5c"
              width="200px"
              height="200px"
              alt="no-images"
            />
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link

                   to='/'
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"

                  >
                    ABOUT
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/education"

                  >
                    EDUCATION
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/skills"

                  >
                    TECH STACK
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/work"

                  >
                    WORK EXPERIENCE
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/contact"

                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-warning" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
