import {MainColors} from "../../types/enums/MainColors";
import {IUser} from "../../types/interfaces/IUser";

const colors = Object.values(MainColors);

const getRandomBgColor = (nearColors: MainColors[]): MainColors => {
    const randomNumber = Math.floor(Math.random() * 3);
    const nextColor = colors[randomNumber];

    for (let c of nearColors) {
        if (c === nextColor)
            return getRandomBgColor(nearColors);
    }

    return nextColor;
}

const getNearColors = (
    colorArr: MainColors[],
    currentNumber: number,
    numberInRow: number = 4
): MainColors[] => {
    let nearColors: MainColors[] = [];

    const isFirstInRow = !(currentNumber % numberInRow);
    const isFirstRow = currentNumber < numberInRow;

    switch (true) {
        case isFirstRow && !isFirstInRow:
            nearColors.push(colorArr[currentNumber - 1]);
            break;
        case !isFirstRow && isFirstInRow:
            nearColors.push(colorArr[currentNumber - numberInRow]);
            break;
        case !isFirstRow && !isFirstInRow:
            nearColors.push(colorArr[currentNumber - 1]);
            nearColors.push(colorArr[currentNumber - numberInRow]);
            break;
        default:
            nearColors = []
    }

    return nearColors;
}

const getColumnsByWidth = () => {
    let width = window.innerWidth;

    switch (true) {
        case width >= 1700:
            return 5;
        case width >= 1200:
            return 4;
        case width >= 975:
            return 3;
        case width >= 600:
            return 2;
        default:
            return 1;
    }
}

export const getColorsArr = (length: number, numberInRow?: number): MainColors[] => {
    const numbers = numberInRow || getColumnsByWidth();

    const colorArr: MainColors[] = [];
    let nearColors: MainColors[] = [];
    let currentColor: MainColors = MainColors.orange;

    for (let i = 0; i < length; i++) {
        nearColors = getNearColors(colorArr, i, numbers)
        currentColor = getRandomBgColor(nearColors)
        colorArr.push(currentColor)
    }

    return colorArr;
}

function range(start: number, end: number): number[] {
    let res = [];
    for (let i = start; i <= end; i++) {
        res.push(i)
    }
    return res;
}

export interface ICardsToMove {
    indexes: number[],
    isMoveLeft: boolean
}

const getIndexesToMove = (users: IUser[], currentId: string, prevId: string): ICardsToMove | undefined => {
    if (!users || (!currentId && !prevId))
        return

    const prevIndex = users.findIndex((el) => el.id === prevId);
    const currentIndex = users.findIndex((el) => el.id === currentId);

    if (prevIndex === -1)
        return {
            indexes: range(currentIndex + 1, users.length - 1),
            isMoveLeft: false
        }

    if (currentIndex === -1)
        return {
            indexes: range(prevIndex, users.length - 2),
            isMoveLeft: true
        }

    if (prevIndex > currentIndex)
        return {
            indexes: range(currentIndex + 1, prevIndex - 1),
            isMoveLeft: false
        }

    return {
        indexes: range(prevIndex, currentIndex - 2),
        isMoveLeft: true
    }
}

const addAnimationTo = (elToMove: ICardsToMove, delay: number, moveDuration: number, cardsArr: HTMLElement[]) => {
    const {indexes, isMoveLeft} = elToMove;

    let classToAdd = `move-${isMoveLeft ? "left" : "right"}`;
    let currentDelay = !isMoveLeft ? (delay + 200) : (indexes.length * delay + 200);
    let delayDif = !isMoveLeft ? delay : (-1 * delay);

    let currentCard;
    indexes.forEach((i) => {
        currentCard = cardsArr[i];

        currentCard.style.animationDelay = `${currentDelay}ms`
        currentCard.style.animationDuration = `${moveDuration}ms`
        currentCard.classList.add(classToAdd)

        currentDelay += delayDif
    })
}

export interface IAddCardAnimation{
    currentCard?: HTMLDivElement | null,
    cardContainer: HTMLDivElement | null,
    prevId: string,
    currentId: string,
    usersArr: IUser[]
}
export const animateRemoving = async (
    { currentCard, currentId, cardContainer, usersArr, prevId}: IAddCardAnimation
) => {

    if (!cardContainer)
        return;

    let cardsArr = Array.from(cardContainer.children as HTMLCollectionOf<HTMLElement>);
    let bigCard = cardContainer.parentElement?.querySelector(".big-card");
    console.log(bigCard)

    const toMove = getIndexesToMove(usersArr, currentId, prevId);
    let moveDuration = 300;
    let delay = 50;
    let numberOfMovingEl = toMove?.indexes ? toMove.indexes.length : 0;

    toMove && addAnimationTo(toMove, delay, moveDuration, cardsArr);

    currentCard?.classList.add("disappear");
    bigCard?.classList.remove("appear");
    !currentId && bigCard?.classList.add("disappear");

    const awaitMoving = numberOfMovingEl * delay + moveDuration  + 200;
    const awaitMs = awaitMoving > 300 ? awaitMoving : 300

    await new Promise(r => setTimeout(r, awaitMs))

    currentCard?.classList.remove("disappear");
    bigCard?.classList.remove("disappear");

    let classToRemove = `move-${toMove?.isMoveLeft ? "left" : "right"}`;
    toMove?.indexes.forEach((i) => {
        cardsArr[i].classList.remove(classToRemove)
        cardsArr[i].style.animationDelay = "0s"
    })

}