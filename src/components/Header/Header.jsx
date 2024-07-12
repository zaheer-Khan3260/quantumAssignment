import React, { useState } from 'react';
import { Link } from "react-router-dom";
import menuImage from "../../Images/menu.png";
import closeIcon from "../../Images/delete.png";
import "./Header.css"

function Header() {
    const [isActive, setIsActive] = useState(false);

    const navbarItems = [
        { id: 1, title: 'Home', url: '/' },
        { id: 2, title: 'Features', url: '/' },
        { id: 3, title: 'Products', url: '/' },
        { id: 4, title: 'Testimonials', url: '/' },
        { id: 5, title: 'Contact Us', url: '/' },
    ];

    return (
        <header className="w-100 h-16 p-3 p-md-5 d-flex justify-content-between align-items-center position-relative">
            <div className="d-flex justify-content-between w-100 align-items-center">
                <div>
                    <h6 className="h6 fw-bold text-primary">Jillion Technologies</h6>
                </div>
                <nav className="d-none d-md-flex">
                    <ul className="d-flex justify-content-between w-80 list-unstyled mb-0">
                        {navbarItems.map(item => (
                            <li key={item.id} className="mx-2">
                                <Link to={item.url} className="text-decoration-none text-primary fw-semibold">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                 </div>
                <div className="d-md-none" onClick={() => setIsActive(!isActive)}>
                    <img src={menuImage} alt="Menu" className="menuImage" />
                </div>
                <div className={`navbar-collapse ${isActive ? 'show' : ''}`}>
          <div className="text-right p-2" onClick={() => setIsActive(false)}>
            <img src={closeIcon} alt="Close" className="closeIcon" />
          </div>
          <nav>
            <ul className="list-unstyled mt-3 ms-3">
              {navbarItems.map(item => (
                <li key={item.id} className="p-2 navbarItems">
                  <Link to={item.url} className="text-decoration-none text-primary fw-semibold">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        </header>
    );
}

export default Header;
