import React, {FC, RefObject, useEffect, useRef, useState} from 'react';

import "./Team.scss"
import {ITeam} from "../../types/interfaces/ITeam";
import UserCard from "../../components/UserCard/UserCard";
import {IUserCard} from "../../types/interfaces/IUserCard";
import {UserCardType} from "../../types/enums/UserCardType";
import {animateRemoving, isOverflow, scrollCardInCenter} from "./utils";
import {MainColors} from "../../types/enums/MainColors";
import {IUser} from "../../types/interfaces/IUser";
import {IUserCardRef} from "../../types/interfaces/IUserCardRef";
import {ButtonColors} from "../../types/enums/Button/ButtonColors";
import classnames from "classnames";



const Team: FC<ITeam> = ({users}) => {

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 767.98)
    const [prevId, setPrevId] = useState<string>("")
    const [selectedUserCard, setSelectedUser] = useState<IUserCard | null>(null);

    const cardContainer = useRef<HTMLDivElement>(null);
    const bigCardRef = useRef<IUserCardRef>(null);

    const handleResize = () => {
        let currentWidth = window.innerWidth;
        setIsMobile(currentWidth <= 767.98);
    }

    useEffect(() => {
        if(!cardContainer.current || !isMobile)
            return;

        const handleScrolling = (e: any) => {
            const containerEl = cardContainer.current;
            const selectedCard = containerEl?.querySelector<HTMLDivElement>(".selected");

            if(isOverflow(selectedCard) && isMobile)
                onCardSelected(null);
        }

        cardContainer.current.addEventListener("scroll", handleScrolling)
        return () => cardContainer?.current?.removeEventListener("scroll", handleScrolling)

    }, [isMobile, cardContainer]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const onCardSelected = (userCard: IUserCard | null, currentCarsEl?: RefObject<HTMLDivElement>) => {
        const prevId = selectedUserCard ? selectedUserCard.user.id : "";

        const cardEl = currentCarsEl?.current
        const containerEl = cardContainer.current;

        if(isMobile && cardEl && containerEl)
            scrollCardInCenter(cardEl, containerEl)

        setPrevId(prevId)
        setSelectedUser(userCard)
    }

    const onCardClosed = async () => {
        const bigCardEl = bigCardRef.current?.current;
        await animateRemoving(bigCardEl)

        onCardSelected(null)
    }


    const renderSmallCard = (user: IUser, index: number) => {
        const currentId = user.id;

        const isSelected = currentId === selectedUserCard?.user.id
        const isPrevious = currentId === prevId

        const className = classnames('small-card', {
            "selected": isSelected,
            "previous": isPrevious
        })

        const onClick = isSelected ? onCardClosed : onCardSelected;

        return <UserCard
            className={className}
            user = {user}
            key = {user.id}
            onButtonClick={onClick}
            color={MainColors.blue}
            buttonColor={ButtonColors.orange}
            disabled={isSelected && !isMobile}
            showDetailedDescription={isSelected && isMobile}
        />
    }

    return <section className={"container team-section"} id={"team"}>
        <h2 className={"team-section__header"} >Our Creative Team</h2>
        <p className={"description"}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        { selectedUserCard && !isMobile &&
            <UserCard
                className={`big-card ${!prevId ? "appear": ""}`}
                type = {UserCardType.big}
                user = {selectedUserCard.user}
                color = {selectedUserCard.color}
                buttonColor={selectedUserCard.buttonColor}
                onButtonClick={onCardClosed}
                ref = {bigCardRef}
            />
        }

        <div className={"shadow-container"}>
        <div className={"user-cards"} ref={cardContainer}>
            {users.map(renderSmallCard)}
        </div>
        </div>
    </section>;

}

export default Team