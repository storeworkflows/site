import {ButtonColors} from "../../types/enums/Button/ButtonColors";

export const getRandomColor = () : ButtonColors => {
    const colors = Object.values(ButtonColors);
    const randomNumber = Math.floor(Math.random() * 2);

    return colors[randomNumber];
}

export const scrollIntoView = (el: HTMLDivElement | null) => {
    const scrollIntoViewOptions: ScrollIntoViewOptions = {
        block: "nearest",
        inline: "nearest",
        behavior: "smooth"
    }
    el?.scrollIntoView(scrollIntoViewOptions);
}