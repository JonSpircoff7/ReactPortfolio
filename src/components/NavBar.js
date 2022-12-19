import React from "react";

const NavBar = () => {
  const navbarStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0px 10%",
  };

  const h1Styles = {
    color: "black",
  };

  const ulStyles = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const liStyles = {
    margin: "0 1em",
  };

  const aStyles = {
    textDecoration: "none",
    listStyle: "none"
  };

  const aHoverStyles = {
    color: "black",
  };

  return (
    <nav style={navbarStyles}>
      <h1 style={h1Styles}>Jonathan Spircoff</h1>
      <ul style={ulStyles}>
        <li style={liStyles}>
          <a
            style={aStyles}
            href="/"
            onMouseEnter={(e) => (e.target.style.cssText = aHoverStyles)}
            onMouseLeave={(e) => (e.target.style.cssText = aStyles)}
          >
            About Me
          </a>
        </li>
        <li style={liStyles}>
          <a
            style={aStyles}
            href="/portfolio"
            onMouseEnter={(e) => (e.target.style.cssText = aHoverStyles)}
            onMouseLeave={(e) => (e.target.style.cssText = aStyles)}
          >
            Portfolio
          </a>
        </li>
        <li style={liStyles}>
          <a
            style={aStyles}
            href="/contact"
            onMouseEnter={(e) => (e.target.style.cssText = aHoverStyles)}
            onMouseLeave={(e) => (e.target.style.cssText = aStyles)}
          >
            Contact
          </a>
        </li>
        <li style={liStyles}>
          <a
            style={aStyles}
            href="/resume"
            onMouseEnter={(e) => (e.target.style.cssText = aHoverStyles)}
            onMouseLeave={(e) => (e.target.style.cssText = aStyles)}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
