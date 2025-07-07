import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <Wrapper>
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="logo-container">
              <div className="logo-icon" />
              <span className="logo-text text-white">SoftSol</span>
            </div>
          </Link>

          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav mx-auto nav-custom">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/ourteam" className="nav-link">Our Team</Link>
              </li>
              <li className="nav-item">
                <Link to="/learning" className="nav-link">Our Learn</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>

          <button className="navbar-toggler d-lg-none" type="button" onClick={toggleOffcanvas} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className={`offcanvas offcanvas-end ${showOffcanvas ? "show" : ""}`} tabIndex="-1">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">
            <div className="logo-container">
              <div className="logo-icon">
              </div>
              <span className="logo-text">SoftSol</span>
            </div>
          </h5>
          <button type="button" className="btn-close" onClick={closeOffcanvas} aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/learning" className="nav-link">Our Learn</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {showOffcanvas && <div className="offcanvas-backdrop fade show" onClick={closeOffcanvas}></div>}
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.div`
  .navbar {
    transition: all 0.3s ease-in-out;
    padding: 0.75rem 1rem;
    z-index: 999;
  }

  .navbar-transparent {
    background: transparent;
  }

  .navbar-scrolled {
    background: linear-gradient(135deg, rgb(31, 122, 193), rgb(14, 57, 91));
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .nav-link {
    color: #fff ;
    font-weight: 400;
    font-size: 1rem;
    margin: 0 1rem;
    position: relative;
    transition: color 0.3s;
  font-family: "DM Sans", sans-serif;

  }

  .nav-link::after {
    content: "";
    height: 2px;
    background: white;
    width: 0%;
    position: absolute;
    bottom: -4px;
    left: 0;
    transition: 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-link:hover {
    color: #fff !important;
  }

  .language-selector img.flag-icon {
    width: 30px;
    border-radius: 20%;
  }

  .logo-text {
    font-weight: bold;
    font-size: 1.3rem;
    letter-spacing: 1px;
     font-family: "DM Sans", sans-serif;
      font-weight: 600;
      font-size: 1.5rem;

  }
.navbar-toggler {
    border: 1.5px solid white;
  }

  .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
  .offcanvas {
    background: #fff;
    color: black;
  }

  .offcanvas .nav-link {
    color: black !important;
    padding: 0.75rem;
    transition: all 0.2s;
  font-family: "DM Sans", sans-serif;

  }

  .offcanvas .nav-link:hover {
    background: rgba(0, 0, 0, 0.05);
    color: black !important;
  }

  .offcanvas-title .logo-text {
    color: black;
  font-family: "DM Sans", sans-serif;

  }
`;
