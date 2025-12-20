import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "../SVG";
import React from "react"
const Navbar = () => {
  const menu = ["About", "Courses", "Events", "Blog", "Contacts"];
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleBurgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuLinkClick = () => {
    setMenuOpen(false);
  };

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 900;

  return (
    <nav className="header-absolute">
      <div className="navigation">
        <Link to="/">
          <Logo />
        </Link>
        <div className="burger-menu" onClick={handleBurgerClick}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
        <ul className={`navigation-menu${menuOpen ? " open" : ""}`}>
          {menu.map((item) => (
            <li key={item.toLowerCase()}>
              <NavLink to={`/${item.toLowerCase()}`} onClick={handleMenuLinkClick}>
                {item}
              </NavLink>
            </li>
          ))}
          {isMobile && menuOpen && (
            <li>
              <div className="navigation-menu-buttons">
                <button>Get consultation</button>
                <button>
                  <FaUser />
                  Log In/Register
                </button>
              </div>
            </li>
          )}
        </ul>
        {!isMobile && (
          <div className="navigation-menu-buttons">
            <button>Get consultation</button>
            <button>
              <FaUser />
              Log In/Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
 