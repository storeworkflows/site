import React, { FC } from 'react';
import {IAvatar} from "../../types/interphases/IAvatar";
import "./Avatar.scss"


const Avatar: FC<IAvatar> = ({img, alt}) => {

    return <img
        className={"avatar-img"}
        src={img}
        alt={alt || img}
        height={180}
        width={180}
    />;

}

export default Avatar