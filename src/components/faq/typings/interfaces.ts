export interface IAccordionContent {
	title: string,
	content: string,
	count?: number
}

export interface IAccordionItems extends Array<IAccordionContent> { }