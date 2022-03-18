import React, { FC } from 'react';

import './IconLinkGroup.scss'
import { IIconLinkGroup} from "../../types/interfaces/IIconLink";
import {MainColors} from "../../types/enums/MainColors";

import {TargetAttr} from "../../types/enums/TargetAttr";
import IconLink from "../IconLink/IconLink";
import {Direction} from "../../types/enums/Direction";

const defaultProps = {
    color: MainColors.green,
    target: TargetAttr.blank,
    direction: Direction.row
};

const IconLinkGroup: FC<IIconLinkGroup> = ({
                                     iconLinks,
                                     color,
                                     target
                                 }) => {

    return <div className={"icon-link-group"}>
        {iconLinks.map((el,index) =>
            <IconLink key={index} iconLink={el} color={color} target={target}/>
        )}
    </div>
}

IconLinkGroup.defaultProps = defaultProps;
export default IconLinkGroup