import {IIconPrefixes} from "./types/interfaces/IIconPrefixes";
import {IIconLink} from "./types/interfaces/IIconLink";
import {INavLink} from "./types/interfaces/INavLink";

export const usedIconPrefixes: IIconPrefixes = {
    fas: "fas",
    fab: "fab",
    far: "far"
}

export const advantages: string[] = [
    "High skilled and motivated team",
    "Daily interaction and regular (weekly/monthly) reports. Set communication frequency as it is comfortable for you",
    "Variety of channels to build meaningful relationships without any communication difficulties",
    "Fast response to clients’ needs",
    "Opportunity to upscale or decrease your project when it’s necessary"
]

export const socialLinks: IIconLink[] = [
    {
        icon: "linkedin-in",
        link: "https://linkedin.com/"
    },
    {
        icon: "youtube",
        link: "https://youtube.com/"
    },
    {
        icon: "instagram",
        link: "https://instagram.com/"
    },
    {
        icon: "facebook-square",
        link: "https://facebook.com/"
    },
    {
        icon: "twitter",
        link: "https://twitter.com/"
    },
]

export const navLinks: INavLink[]  = [
    {
        title: "Home",
        href: "#"
    },
    {
        title: "About",
        href: "#discover"
    },
    {
        title: "Advantages",
        href: "#advantages"
    },
    {
        title: "Products",
        href: "#products"
    },
    {
        title: "Reviews",
        href: "#reviews"
    },
    {
        title: "FAQ",
        href: "#faq"
    },
    {
        title: "Team",
        href: "#team"
    },
]
