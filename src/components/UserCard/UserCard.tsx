import React, {FC, useEffect, useRef} from 'react';
import "./UserCard.scss"
import Avatar from "../Avatar/Avatar";
import {IUserCard} from "../../types/interfaces/IUserCard";
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
    user,
    color,
    onButtonClick,
    buttonColor,
    type
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isBigCard = type === UserCardType.big

    useEffect(() => {
        const scrollIntoViewOptions: ScrollIntoViewOptions = {
            block: "center",
            inline: "nearest",
            behavior: "smooth"
        }
        isBigCard && cardRef.current && cardRef.current.scrollIntoView(scrollIntoViewOptions);
    }, [user])

    const {id, firstName, secondName, img, shortDescription, description} = user
    const buttonBg = buttonColor || getRandomColor();
    const name = secondName ? `${firstName} ${secondName}` : firstName

    const cardClasses = classnames(
        'user-card', [`${color}`], [`${type}`]
    )

    const imgType = isBigCard ? AvatarImgTypes.big : AvatarImgTypes.small
    const btnText = isBigCard ? "Close" : "Details"

    const currentDescription = isBigCard
        ? (description || shortDescription || " ")
        : (shortDescription || " ")

    const onClick = () => {
        const toReturn: IUserCard = {
            user: user,
            color: color,
            buttonColor: buttonBg
        };
        onButtonClick && onButtonClick(toReturn);
    }

    const renderContent = () => <>
        <p className={"user-name"}>{name}</p>
        <p className={"user-description"}>{currentDescription}</p>
        <Button text={btnText}
                color={buttonBg}
                className={"card-button"}
                onClick={onClick}
        />
    </>

    return <div className={cardClasses} ref={cardRef}>
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