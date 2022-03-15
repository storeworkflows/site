import {IFormValues} from "./IFormValues";


export interface IContactForm {
    onSubmit: (
        values: IFormValues,
    ) =>  Promise<string | void | undefined>
}