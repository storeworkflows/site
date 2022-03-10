import {MainColors} from "../enums/MainColors";
import {MouseEvent} from "react";
import {ButtonColors} from "../enums/Button/ButtonColors";
import {UserCardType} from "../enums/UserCardType";

export interface IUserCard{
    img: string,
    id: string,
    firstName: string,
    secondName?: string,
    description?: string,
    color?: MainColors,
    onButtonClick?: (arg0: MouseEvent) => void,
    buttonColor?: ButtonColors,
    type?: UserCardType
}