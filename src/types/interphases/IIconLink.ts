import {IconName} from "@fortawesome/fontawesome-common-types";
import {MainColors} from "../enums/MainColors";
import {TargetAttr} from "../enums/TargetAttr";

export interface IIconLink {
    icon: IconName,
    color?: MainColors,
    link: string,
    target?: TargetAttr
}