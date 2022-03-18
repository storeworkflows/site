import classnames from 'classnames';
import React, {FC, useState, useRef} from 'react';
import './Accordion.scss';
import {IAccordionProperties} from "../../../types/interfaces/IFaq";
import Button from "../../../components/Button/Button";

const Accordion: FC<IAccordionProperties> = ({
																							 count,
																							 title,
																							 content
																						 }) => {
	const [active, setActive] = useState(false);
	const textContainerRef = useRef<HTMLParagraphElement>(null);
	const activeClass = classnames({'--active': active});

	const clickHandler = () => {
		setActive(!active);

		if (textContainerRef.current) {
			if (textContainerRef.current.style.maxHeight) {
				textContainerRef.current.style.maxHeight = '';
			} else {
				textContainerRef.current.style.maxHeight = textContainerRef.current.scrollHeight + "px";
			}
		}
	}


	return (
		<article className='accordion'>
			<div className={classnames('accordion__count', activeClass)}>{count}</div>
			<div className="accordion__content">
				<h3 className={classnames('accordion__title', activeClass)}>{title}</h3>
				<p
					ref={textContainerRef}
					className={classnames('accordion__text', activeClass)}>{content}</p>
			</div>
			<div className="accordion__button-wrapper">
				<Button
					//@ts-ignore
					color={activeClass ? 'green' : 'orange'}
					icon={active ? 'angle-up' : 'angle-down'}
					onClick={clickHandler}
					className={classnames('accordion__button', activeClass)}
				>click</Button>
			</div>
		</article>
	);
};

export default Accordion;