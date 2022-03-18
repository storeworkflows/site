import React, {FC, useCallback, useState} from "react";
import "./Navigation.scss";
import classnames from "classnames";
import {INavigation} from "../../types/interfaces/INavigation";
import Logo from "../Logo/Logo";


const Navigation: FC<INavigation> = ({mobile,navLinks,className,position}): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = useCallback(() => setIsOpen(!isOpen),[isOpen])
	const closeMobileMenu = useCallback(() => setIsOpen(false),[isOpen])

	const menuBurgerClasses = classnames(
		'menu-burger',
		{
			[`active`]: isOpen,
		},
	)

	const navLinksClasses = classnames(
		'nav-links',
		{
			[`mobile`]: mobile,
			[`active`]: isOpen && mobile,
			[`${position}`]: mobile,
			[`${className}`]: true
		},
	)

	return (
		<nav className="nav">
			<Logo/>
			<ul  className={navLinksClasses}>
				{
					navLinks.map((nav,index)=>(
						<li key={index} className="nav-link" onClick={closeMobileMenu}>
							<a href={nav.href}>{nav.title}</a>
						</li>
					))
				}
			</ul>
			{
				mobile && (
					<div className={menuBurgerClasses} onClick={handleOpen}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				)
			}
		</nav>
	);
};

Navigation.defaultProps = {
	className: "",
	mobile: false,
	position: "top",
	navLinks: []
};
export default Navigation;