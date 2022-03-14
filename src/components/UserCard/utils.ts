import {ButtonColors} from "../../types/enums/Button/ButtonColors";

export const getRandomColor = () : ButtonColors => {
    const colors = Object.values(ButtonColors);
    const randomNumber = Math.floor(Math.random() * 3);

    return colors[randomNumber];
}