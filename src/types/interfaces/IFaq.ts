export interface IAccordionContent {
	title: string,
	content: string
}

export interface IAccordionItems extends Array<IAccordionContent> { }

export interface IAccordionProperties extends IAccordionContent{
	count: string
}