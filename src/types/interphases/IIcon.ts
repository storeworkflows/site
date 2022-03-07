import {IconName, IconPrefix} from "@fortawesome/fontawesome-common-types";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

export interface IIcon {
    icon: IconName,
    prefix?: IconPrefix,
    size?: SizeProp
}
