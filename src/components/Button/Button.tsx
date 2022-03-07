import React, { FC } from 'react';
import classnames from 'classnames'

import {IButton} from "../../types/interphases/IButton";
import {ButtonTypes} from "../../types/enums/Button/ButtonTypes";
import {ButtonColors} from "../../types/enums/Button/ButtonColors";
import Icon from "../Icon/Icon";
import "./Button.css"

const defaultProps = {
    type: ButtonTypes.primary,
    color: ButtonColors.orange
};

const Button: FC<IButton> = ({
                                 text,
                                 icon,
                                 type,
                                 color
}) => {
    if(!text && !icon)
        return null;

    const buttonClasses = classnames(
        'button',
        {
            [`${type}`]: true,
            [`${color}`]: true
        },
    )

    return (
        <button className={buttonClasses}>
            {text && text}
            {icon && <Icon icon={icon}/>}
        </button>
    )
}

Button.defaultProps = defaultProps;
export default Button