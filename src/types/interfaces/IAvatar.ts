import {AvatarImgTypes} from "../enums/AvatarImgTypes";

export interface IAvatar{
    img: string,
    alt?: string,
    type?: AvatarImgTypes,
    className?: string
}