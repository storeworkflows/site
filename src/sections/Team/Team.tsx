import React, {FC, useEffect, useMemo, useRef, useState} from 'react';

import "./Team.scss"
import {ITeam} from "../../types/interfaces/ITeam";
import UserCard from "../../components/UserCard/UserCard";
import {IUserCard} from "../../types/interfaces/IUserCard";
import {UserCardType} from "../../types/enums/UserCardType";
import {animateRemoving, getColorsArr} from "./utils";
import {MainColors} from "../../types/enums/MainColors";


const Team: FC<ITeam> = ({users}) => {
    const [prevId, setPrevId] = useState<string>("")
    const [selectedUserCard, setSelectedUser] = useState<IUserCard | null>(null);
    const [colorArr, setColorArr] = useState<MainColors[]>([])

    const containerRef = useRef<HTMLDivElement>(null)

    const onCardSelected = async (userCard: IUserCard, cardElem: HTMLDivElement | null) => {
        const prevId = selectedUserCard ? selectedUserCard.user.id : "";
        const currentId = userCard.user.id;

        await animateRemoving({
            currentCard: cardElem,
            cardContainer: containerRef.current,
            prevId,
            currentId,
            usersArr: users
        });

        setPrevId(prevId)
        setSelectedUser(userCard)
    }
    const onCardClosed = async () => {
        const prevId = selectedUserCard ? selectedUserCard.user.id : "";

        await animateRemoving({
            cardContainer: containerRef.current,
            prevId,
            currentId: "",
            usersArr: users
        });

        setPrevId(prevId)
        setSelectedUser(null)
    }

    useEffect(() => {
        setColorArr( getColorsArr(users.length))
    }, [users])

    return <section className={"container team-section"} id={"team"}>
        <h2 className={"team-section__header"}>Our Creative Team</h2>
        <p className={"description"}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        { selectedUserCard &&
            <UserCard
                type = {UserCardType.big}
                user = {selectedUserCard.user}
                color={selectedUserCard.color}
                buttonColor={selectedUserCard.buttonColor}
                onButtonClick={onCardClosed}
            />
        }
        <div className={"user-cards"} ref={containerRef}>
            {users.map((user, index) => {
                if(selectedUserCard && user.id === selectedUserCard.user.id)
                    return null;

                const color: MainColors = colorArr[index];
                const isPrev = user.id === prevId
                const className = `small-card ${isPrev && "appear"}`

                return <UserCard
                    className={className}
                    user = {user}
                    key = {user.id}
                    onButtonClick={onCardSelected}
                    color={color}
                />
            }) }
        </div>
    </section>;

}

export default Team