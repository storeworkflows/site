import React, {FC, useCallback, useEffect, useState} from "react";
import "./Navigation.scss";
import classnames from "classnames";
import {INavigation} from "../../types/interfaces/INavigation";
import Logo from "../Logo/Logo";


const Navigation: FC<INavigation> = ({mobile,navLinks,className,position}): JSX.Element => {

	const [isOpen, setIsOpen] = useState(false);
	const [resizeHeight, setResizeHeight] = useState(false);

	const handleOpen = useCallback(() => setIsOpen(!isOpen),[isOpen])

	console.log("render");

	useEffect(() => {
		const resizeHeight = () => {
			const documentScrollTop = document.documentElement.scrollTop;
			const isScrolledDown = documentScrollTop > 150;

			setResizeHeight(isScrolledDown);
		}

		window.addEventListener("scroll", resizeHeight)
		return () => window.removeEventListener("scroll", resizeHeight)

	}, []);

	const navClasses = classnames(
		'nav',
		{
			[`resize`]: resizeHeight
		},
	)

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
		<nav className={navClasses}>
			<Logo/>
			<ul  className={navLinksClasses}>
				{
					navLinks.map((nav,index)=>(
						<li key={index} className="nav-link" >
							<a href={nav.href} onClick={handleOpen}>{nav.title}</a>
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