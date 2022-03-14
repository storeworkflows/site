import React, { FC } from 'react';
import classnames from 'classnames'

import {IButton} from "../../types/interphases/IButton";
import {ButtonTypes} from "../../types/enums/Button/ButtonTypes";
import {ButtonColors} from "../../types/enums/Button/ButtonColors";
import Icon from "../Icon/Icon";
import "./Button.scss"
import {ButtonSizes} from "../../types/enums/Button/ButtonSizes";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

const defaultIconSize: SizeProp = "lg";
const defaultProps = {
    type: ButtonTypes.primary,
    color: ButtonColors.orange,
    size: ButtonSizes.md,
    onClick: () => 0,
    iconSize: defaultIconSize
};

const Button: FC<IButton> = ({
    text,
    icon,
    type,
    color,
    onClick,
    size,
    className,
    iconSize
}) => {
    if(!text && !icon)
        return null;

    const isIconButton = !text;
    const buttonClasses = classnames(
        'button',
        {
            [`${className}`]: className,
            [`${size}`]: true,
            [`${type}`]: true,
            [`${color}`]: true,
            [`icon-button`]: isIconButton
        },
    )

    return (
        <button className={buttonClasses} onClick={onClick}>
            {text && text}
            {icon && <Icon icon={icon} size={iconSize}/>}
        </button>
    )
}

Button.defaultProps = defaultProps;
export default Button