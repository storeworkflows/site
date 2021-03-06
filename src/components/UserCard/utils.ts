import {ButtonColors} from "../../types/enums/Button/ButtonColors";

export const getRandomColor = () : ButtonColors => {
    const colors = Object.values(ButtonColors);
    const randomNumber = Math.floor(Math.random() * 2);

    return colors[randomNumber];
}

export const scrollIntoView = (el: HTMLElement | null | undefined) => {
    if(!el)
        return;

    const y = el.getBoundingClientRect().top + window.scrollY -100;
    window.scrollTo({top: y, behavior: 'smooth'});
}