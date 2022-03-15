import {MainColors} from "../enums/MainColors";
import {ButtonColors} from "../enums/Button/ButtonColors";
import {UserCardType} from "../enums/UserCardType";
import {IUser} from "./IUser";

export interface IUserCard{
    user: IUser,
    color?: MainColors,
    onButtonClick?: (arg0: IUserCard) => void,
    buttonColor?: ButtonColors,
    type?: UserCardType
}