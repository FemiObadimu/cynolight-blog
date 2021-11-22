import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Navs = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <h2 className="logos">
            The Cynolight's <FontAwesomeIcon icon={faLightbulb} />
          </h2>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/create"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Create
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              to="/blogs"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <p>
            {click ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navs;
