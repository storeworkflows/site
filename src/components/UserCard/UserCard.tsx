import React, {FC} from 'react';
import "./UserCard.scss"
import Avatar from "../Avatar/Avatar";
import {IUserCard} from "../../types/interphases/IUserCard";
import Button from "../Button/Button";
import {MainColors} from "../../types/enums/MainColors";
import {getRandomColor} from "./utils";
import classnames from "classnames";
import {UserCardType} from "../../types/enums/UserCardType";
import {AvatarImgTypes} from "../../types/enums/AvatarImgTypes";

const defaultProps = {
    color: MainColors.orange,
    onButtonClick: () => 0,
    type: UserCardType.small
};

const UserCard: FC<IUserCard> = ({
    img,
    id,
    firstName,
    secondName,
    description,
    color,
    onButtonClick,
    buttonColor,
    type
}) => {

    const buttonBg = buttonColor || getRandomColor();
    const name = secondName ? `${firstName} ${secondName}` : firstName

    const cardClasses = classnames(
        'user-card', [`${color}`], [`${type}`]
    )

    const isBigCard = type === UserCardType.big
    const imgType = isBigCard ? AvatarImgTypes.big : AvatarImgTypes.small
    const btnText = isBigCard ? "Close" : "Details"

    const renderContent = () => <>
        <p className={"user-name"}>{name}</p>
        <p className={"user-description"}>{description || " "}</p>
        <Button text={btnText}
                color={buttonBg}
                className={"card-button"}
                onClick={onButtonClick}
        />
    </>

    return <div className={cardClasses}>
        <Avatar img={img} alt={id} type={imgType}/>
        {isBigCard
            ? <div className={"content"}>
                {renderContent()}
            </div>
            : renderContent()
        }
    </div>;

}

UserCard.defaultProps = defaultProps;
export default UserCard