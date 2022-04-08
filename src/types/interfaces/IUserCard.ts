import {MainColors} from "../enums/MainColors";
import {ButtonColors} from "../enums/Button/ButtonColors";
import {UserCardType} from "../enums/UserCardType";
import {IUser} from "./IUser";
import {IButton} from "./IButton";
import {RefObject} from "react";

export interface IUserCard{
    user: IUser,
    color?: MainColors,
    onButtonClick?: (arg0: IUserCard, arg1?: RefObject<HTMLDivElement>) => void | Promise<void>,
    buttonColor?: ButtonColors,
    type?: UserCardType,
    className?: string,
    isIntoView?: boolean,
    disabled?: boolean,
    showDetailedDescription?: boolean
}