import React, {useState} from 'react';
import './FAQ.scss';
import {getCount} from "./utils";
import {mockedAccordionItems} from "./mock";
import Accordion from "./accordion/Accordion";
import {IAccordionItems} from "./typings/IFaq";

const FAQ = () => {
	const [accordionItems, setAccordionItems] = useState<IAccordionItems>(mockedAccordionItems);

	return (
		<div id="faq" className="faq__wrapper">
			<section className="container">
				<h2 className="faq__title">FAQ</h2>

				<div className="faq__content">
					{
						accordionItems.map(({content, title}, index) => (
							<Accordion
								key={index}
								title={title}
								content={content}
								count={getCount(index + 1)}
							/>
						))
					}
				</div>
			</section>
		</div>
	);
};

export default FAQ;