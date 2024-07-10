"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Data from "./data.json";

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <React.Fragment>
            <div>
                <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            <Image src={Data.logo} height={32} width={32} alt="@stianook" />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={toggleMenu} data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarColor01">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/" onClick={handleLinkClick}>
                                        Home
                                        <span className="visually-hidden">(current)</span>
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        Games
                                    </a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item text-wrap" href="/games/flipmad" onClick={handleLinkClick}>
                                            FlipMAD
                                        </Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        Apps
                                    </a>
                                    <div className="dropdown-menu">
                                    </div>
                                </li>

                                {/* <li className="nav-item">
                                    <Link className="nav-link" href="/buymeacoffee" onClick={handleLinkClick}>
                                        Buy me a ☕
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};
