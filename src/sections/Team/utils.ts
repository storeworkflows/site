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


export const animateRemoving = async ( elem: HTMLDivElement | null | undefined ) => {
    if (!elem)
        return;

    elem.classList.add("disappear");
    await new Promise(r => setTimeout(r, 300))

    elem.classList.remove("disappear");
}

export const isOverflow = (component?: HTMLDivElement | null) => {
    if(!component)
        return

    const fullWidth = window.innerWidth;
    const cardRect = component.getBoundingClientRect();
    const cardX = cardRect.x;
    const cardWidth = cardRect.width

    const isOverLeft = cardX < -cardWidth
    const isOverRight = cardX > fullWidth

    return isOverLeft || isOverRight
}

export const scrollCardInCenter = (cardEl: HTMLDivElement, containerEl: HTMLDivElement) => {
    const halfWidth = window.innerWidth / 2;

    const cardRect =  cardEl.getBoundingClientRect();
    const halfCardWidth = cardRect.width / 2;
    const visibleMiddle = halfWidth - halfCardWidth;

    containerEl.scrollBy({
        left: cardRect.x - visibleMiddle ,
        behavior: 'smooth'
    });
}