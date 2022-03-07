import {ButtonTypes} from "../enums/Button/ButtonTypes";
import {ButtonColors} from "../enums/Button/ButtonColors";
import {IconName} from "@fortawesome/fontawesome-common-types";

export interface IButton {
    text?: string,
    icon?: IconName,
    type?: ButtonTypes,
    color?: ButtonColors
}