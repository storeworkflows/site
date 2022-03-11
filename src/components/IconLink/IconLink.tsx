import React, { FC } from 'react';

import './IconLink.scss'
import {IIconLink} from "../../types/interphases/IIconLink";
import {MainColors} from "../../types/enums/MainColors";

import Icon from "../Icon/Icon";
import classnames from "classnames";
import {TargetAttr} from "../../types/enums/TargetAttr";

const defaultProps = {
    color: MainColors.green,
    target: TargetAttr.blank
};

const IconLink: FC<IIconLink> = ({
                             icon,
                             color,
                             link,
                             target
}) => {

    const iconLinkClasses = classnames(
        'icon-link',
        { [`${color}`]: true }
    )

    return <a href={link} className={iconLinkClasses} target={target}>
        <Icon icon={icon} size={"lg"}/>
    </a>
}

IconLink.defaultProps = defaultProps;
export default IconLink