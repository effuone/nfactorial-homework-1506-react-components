//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as FacebookLogoSVG } from "../../src/assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../src/assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../src/assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../src/assets/youtube.svg";

//массив данных ссылок
export const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];