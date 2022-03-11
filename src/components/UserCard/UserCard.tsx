import React, { FC } from 'react';
import "./UserCard.scss"
import Avatar from "../Avatar/Avatar";
import {IUserCard} from "../../types/interphases/IUserCard";
import Button from "../Button/Button";
import {MainColors} from "../../types/enums/MainColors";
import {getRandomColor} from "./utils";
import classnames from "classnames";

const defaultProps = {
    color: MainColors.orange,
    onButtonClick: () => 0
};

const UserCard: FC<IUserCard> = ({
    img,
    id,
    firstName,
    secondName,
    description,
    color,
    onButtonClick
}) => {

    const buttonColor = getRandomColor();
    const name = secondName ? `${firstName} ${secondName}` : firstName

    const cardClasses = classnames(
        'user-card', [`${color}`]
    )

    return <div className={cardClasses}>
        <Avatar img={img} alt={id}/>
        <p className={"user-name"}>{name}</p>
        <p className={"user-description"}>{description || " "}</p>
        <Button text={"Details"}
                color={buttonColor}
                className={"card-button"}
                onClick={onButtonClick}
        />
    </div>;

}

UserCard.defaultProps = defaultProps;
export default UserCard