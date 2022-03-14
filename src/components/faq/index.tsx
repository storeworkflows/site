import React from 'react';
import Accordion from "./accordion/Accordion";
import {accordionItems} from "./mockedData";

const FAQ = () => {

	return (
		<section className="faq">
			<h1 className="faq__title">FAQ</h1>

			<div className="faq__content">
				{
					accordionItems.map(({content, title}, index) => (
						<Accordion
							content={content}
							title={title}
							count={index + 1}
						/>
					))
				}
			</div>
		</section>
	);
};

export default FAQ;