import React, {FC, ForwardedRef, RefObject, useEffect, useImperativeHandle, useRef, useState} from 'react';
import "./UserCard.scss"
import Avatar from "../Avatar/Avatar";
import {IUserCard} from "../../types/interfaces/IUserCard";
import Button from "../Button/Button";
import {MainColors} from "../../types/enums/MainColors";
import {getRandomColor, scrollIntoView} from "./utils";
import classnames from "classnames";
import {UserCardType} from "../../types/enums/UserCardType";
import {AvatarImgTypes} from "../../types/enums/AvatarImgTypes";
import {ButtonColors} from "../../types/enums/Button/ButtonColors";
import {IUserCardRef} from "../../types/interfaces/IUserCardRef";

const defaultProps = {
    color: MainColors.orange,
    onButtonClick: () => {},
    type: UserCardType.small
};


const UserCard = React.forwardRef<IUserCardRef, IUserCard>(({
    user,
    color,
    onButtonClick,
    buttonColor,
    type,
    className,
    isIntoView,
    disabled
}, ref) => {

    const [buttonBg, setButtonBg] = useState<ButtonColors>(getRandomColor())
    const isBigCard = type === UserCardType.big

    const innerRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
        current: innerRef.current
    }));

    const userId = user.id
    useEffect(() => {
        isBigCard && scrollIntoView(innerRef.current)
    }, [userId])

    useEffect(() => setButtonBg(buttonColor || getRandomColor()), [])

    const {id, firstName, secondName, img, shortDescription, description} = user
    const name = secondName ? `${firstName} ${secondName}` : firstName

    const cardClasses = classnames(
        'user-card', [`${color}`], [`${type}`], {
            [`${className}`]: className
        }
    )

    const imgType = isBigCard ? AvatarImgTypes.big : AvatarImgTypes.small
    const btnText = isBigCard ? "Close" : "More"

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
                disabled={disabled}
        />
    </>

    return <div className={cardClasses} ref={innerRef}>
        <Avatar img={img} alt={id} type={imgType}/>
        {isBigCard
            ? <div className={"content"}>
                {renderContent()}
            </div>
            : renderContent()
        }
    </div>;

});

UserCard.defaultProps = defaultProps;
export default UserCard