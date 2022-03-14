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

export const getColorsArr = (length: number, numberInRow: number = 4) : MainColors[] => {
    const colorArr: MainColors[] = [];
    let nearColors: MainColors[] = [];
    let currentColor: MainColors = MainColors.orange;

    for(let i = 0; i<length; i++){
        nearColors = getNearColors(colorArr, i, numberInRow)
        currentColor = getRandomBgColor(nearColors)
        colorArr.push(currentColor)
    }

    return colorArr;
}