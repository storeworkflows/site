import React, {FC, useEffect, useMemo, useRef, useState} from 'react';

import "./Team.scss"
import {ITeam} from "../../types/interfaces/ITeam";
import UserCard from "../../components/UserCard/UserCard";
import {IUserCard} from "../../types/interfaces/IUserCard";
import {UserCardType} from "../../types/enums/UserCardType";
import {animateRemoving, getColorsArr} from "./utils";
import {MainColors} from "../../types/enums/MainColors";
import userCard from "../../components/UserCard/UserCard";
import classnames from "classnames";
import {IUser} from "../../types/interfaces/IUser";
import {IUserCardRef} from "../../types/interfaces/IUserCardRef";
//import {scrollIntoView} from "../../components/UserCard/utils";


const Team: FC<ITeam> = ({users}) => {
    const [prevId, setPrevId] = useState<string>("")
    const [selectedUserCard, setSelectedUser] = useState<IUserCard | null>(null);
    const [colorArr, setColorArr] = useState<MainColors[]>([])

    const bigCardRef = useRef<IUserCardRef>(null);

    const onCardSelected = (userCard: IUserCard | null) => {
        const prevId = selectedUserCard ? selectedUserCard.user.id : "";

        setPrevId(prevId)
        setSelectedUser(userCard)
    }

    const onCardClosed = async () => {
        const bigCardEl = bigCardRef.current?.current;
        await animateRemoving(bigCardEl)

        onCardSelected(null)
    }

    useEffect(() => {
        setColorArr( getColorsArr(users.length))
    }, [users])

    const renderSmallCard = (user: IUser, index: number) => {
        const currentId = user.id;

        const isSelected = currentId === selectedUserCard?.user.id
        const isPrevious = currentId === prevId

        const className = classnames('small-card', {
            "selected": isSelected,
            "previous": isPrevious
        })

        return <UserCard
            className={className}
            user = {user}
            key = {user.id}
            onButtonClick={onCardSelected}
            color={colorArr[index]}
            disabled={isSelected}
        />
    }

    return <section className={"container team-section"} id={"team"}>
        <h2 className={"team-section__header"} >Our Creative Team</h2>
        <p className={"description"}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        { selectedUserCard &&
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
        <div className={"user-cards"}>
            {users.map(renderSmallCard)}
        </div>
    </section>;

}

export default Team