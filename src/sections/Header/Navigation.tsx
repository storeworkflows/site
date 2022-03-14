import React, {useCallback, useEffect, useState} from "react";
import "./havigation.scss";
import {NavigationProps, TCloseMobileMenuType, THandleOpen} from "./typing/typing";


const Navigation:React.FC<NavigationProps> = ({}): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpen = useCallback<THandleOpen>(() => setIsOpen(!isOpen),[isOpen])
    const closeMobileMenu = useCallback<TCloseMobileMenuType>(() => setIsOpen(false),[setIsOpen])


    return (
        <nav className="header__nav">
            <div className="header__nav-logo">
                <a href="#">
                    <span>Store</span>Workflows
                </a>
            </div>
            <ul className={isOpen ? "header__nav-links active" : "header__nav-links"}>
                <li className="nav-link" onClick={closeMobileMenu}>
                    <a href="#">Home</a>
                </li>
                <li className="nav-link" onClick={closeMobileMenu}>
                    <a href="#">About</a>
                </li>
                <li className="nav-link" onClick={closeMobileMenu}>
                    <a href="#">Advetages</a>
                </li>
                <li className="nav-link" onClick={closeMobileMenu}>
                    <a href="#">Proucts</a>
                </li>
                <li className="nav-link" onClick={closeMobileMenu}>
                    <a href="#" >Reviews</a>
                </li>
                <li className="nav-link" onClick={closeMobileMenu}>
                    <a href="#" >FAQ</a>
                </li>
                <li className="nav-link" onClick={closeMobileMenu}>
                    <a href="#" >Team</a>
                </li>
            </ul>
            <div className="mobile-menu" onChange={handleOpen} >
                <label htmlFor="check">
                    <input checked={isOpen} type="checkbox" id="check" />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </nav>
    );
};

export default Navigation;