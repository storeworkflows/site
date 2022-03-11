import {MainColors} from "../enums/MainColors";
import {MouseEvent} from "react";

export interface IUserCard{
    img: string,
    id: string,
    firstName: string,
    secondName?: string,
    description?: string,
    color?: MainColors,
    onButtonClick?: (arg0: MouseEvent) => void
}