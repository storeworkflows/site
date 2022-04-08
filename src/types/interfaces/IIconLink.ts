import {IconName} from "@fortawesome/fontawesome-common-types";
import {MainColors} from "../enums/MainColors";
import {TargetAttr} from "../enums/TargetAttr";
import {Direction} from "../enums/Direction";

export interface IIconLink {
    icon: IconName,
    link: string,

}

export interface IIconLinkComponent {
    color?: MainColors,
    iconLink: IIconLink,
    target?: TargetAttr
    disabled?: boolean
}

export interface IIconLinkGroup {
    color?: MainColors,
    iconLinks: IIconLink[],
    target?: TargetAttr,
    direction?: Direction,
    className?: string
}