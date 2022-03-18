import {INavLink} from "./INavLink";


export interface INavigation {
  mobile?: boolean
  className?: string
  navLinks: INavLink[]
  position?: "top" | "bottom"
}