import React, {FC, useState, MouseEvent, useRef} from 'react';
import classnames from 'classnames'
import {IAccordionContent} from "../typings/interfaces";
import './accordion.scss'
const Accordion: FC<IAccordionContent> = ({
	  count = 0,
	  title,
	  content
}) => {
	const [active, setActive] = useState(false);
	const textContainerRef = useRef<HTMLParagraphElement>(null);
	const activeClass = classnames({'--active': active});
	console.log(activeClass)
	const clickHandler = () => {
		setActive(!active)
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
			<div className={classnames('accordion__count', activeClass)}>{count < 10 ? '0' + (count + 1) : count + 1}</div>
			<div className="accordion__content">
				<h3 className={classnames('accordion__title', activeClass)}>{title}</h3>
				<p
					ref={textContainerRef}
					className={classnames('accordion__text', activeClass)}>{content}</p>
			</div>
			<div className="accordion__button-wrapper" >
				<button className={classnames('accordion__button', activeClass)} onClick={clickHandler}>click</button>
			</div>
		</article>
	);
};

export default Accordion;