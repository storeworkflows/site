import React, {FC} from 'react';
import {IAvatar} from "../../types/interphases/IAvatar";
import "./Avatar.scss"
import {AvatarImgTypes} from "../../types/enums/AvatarImgTypes";
import classnames from "classnames";

const defaultProps = {
    type: AvatarImgTypes.small
};

const Avatar: FC<IAvatar> = ({img, alt, type, className }) => {

    const classes = classnames("avatar-img", [`${type}`], { [`${className}`] : className})

    return <img
        className={classes}
        src={img}
        alt={alt || img}
    />;

}

Avatar.defaultProps = defaultProps;
export default Avatar