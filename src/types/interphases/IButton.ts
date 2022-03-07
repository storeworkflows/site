import {MouseEvent} from "react";
import {ButtonTypes} from "../enums/Button/ButtonTypes";
import {ButtonColors} from "../enums/Button/ButtonColors";
import {IconName} from "@fortawesome/fontawesome-common-types";
import {ButtonSizes} from "../enums/Button/ButtonSizes";



export interface IButton {
    text?: string,
    icon?: IconName,
    type?: ButtonTypes,
    color?: ButtonColors,
    onClick?: (arg0: MouseEvent) => void,
    size?: ButtonSizes
}