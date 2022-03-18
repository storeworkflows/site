import {MainColors} from "../../types/enums/MainColors";

const colors = Object.values(MainColors);

const getRandomBgColor = (nearColors: MainColors[]) : MainColors => {
    const randomNumber = Math.floor(Math.random() * 3);
    const nextColor = colors[randomNumber];

    for(let c of nearColors){
        if(c === nextColor)
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
    const isFirstRow = currentNumber<numberInRow;

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
        case width>=1700:
            return 5;
        case width >=1200:
            return 4;
        case width >= 975:
            return 3;
        case width >= 600:
            return 2;
        default:
            return 1;
    }
}

export const getColorsArr = (length: number, numberInRow?: number) : MainColors[] => {
    const numbers = numberInRow || getColumnsByWidth();

    const colorArr: MainColors[] = [];
    let nearColors: MainColors[] = [];
    let currentColor: MainColors = MainColors.orange;

    for(let i = 0; i<length; i++){
        nearColors = getNearColors(colorArr, i, numbers)
        currentColor = getRandomBgColor(nearColors)
        colorArr.push(currentColor)
    }

    return colorArr;
}