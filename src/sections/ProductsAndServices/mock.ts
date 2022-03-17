import { ISlideContent } from "../../types/interfaces/ISlideContent";
import office from '../../assets/img/office1.jpeg'
import office1 from '../../assets/img/office2.jpeg'
import app from '../../assets/img/app.jpeg'
import app1 from '../../assets/img/app1.png'
import { off } from "process";
export const slides: Array<ISlideContent> = [
  {
    img: office,
    header: 'Person Persons',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum autem architecto, provident laudantium incidunt placeat eligendi et eaque beatae ad alias voluptates?  '
  },
  {
    img: app,
    header: 'Dabudi Dabudai',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum autem architecto, provident laudantium incidunt placeat eligendi et eaque beatae ad alias voluptates?  '
  },
  {
    img: app1,
    header: 'Somebody Tolove',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum autem architecto, provident laudantium incidunt placeat eligendi et eaque beatae ad alias voluptates?  '
  },
  {
    img: office1,
    header: 'Nevermind Ifind',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum autem architecto, provident laudantium incidunt placeat eligendi et eaque beatae ad alias voluptates?  '
  },
  {
    img: app,
    header: 'Someone Likeyou',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum autem architecto, provident laudantium incidunt placeat eligendi et eaque beatae ad alias voluptates?  '
  }
]

