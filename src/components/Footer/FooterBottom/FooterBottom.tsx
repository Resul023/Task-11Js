import { FooterListLeftSide } from "../../FooterList/FooterListLeftSide";
import "./FooterBottom.scss";
import logo from "./icons/right-side-icon.svg";
import iconLeft1 from "./icons/facebook.svg";
import iconLeft2 from "./icons/twitter.svg";
import iconLeft3 from "./icons/vk.svg";
// import iconLeft4 from "./icons/youtube.svg";
import iconLeft5 from "./icons/insta.svg";
import iconRight1 from "./icons/visa.svg";
import iconRight2 from "./icons/mastercard.svg";
import iconRight3 from "./icons/robokassa.svg";
import { FooterList } from "../../FooterList/FooterList";
export const FooterBottom = () => {
  return (
    <section id="footer-bottom">
      <div className="container">
        <div className="row">
          <FooterListLeftSide
            className="col-ft-3 logo-side"
            logo={logo}
            text1="Lorem ipsum dolor sit amet"
            text2="Lorem ipsum dolor sit."
            icon1={iconLeft1}
            icon2={iconLeft2}
            icon3={iconLeft3}
            icon4={iconLeft3}
            icon5={iconLeft5}
            iconLink="#"
          />

          <FooterList
            className="col-ft-2 footer-list"
            title="Loremasd"
            text="Loremsassdasd"
            textLink="#"
          />
          <FooterList
            className="col-ft-2 footer-list"
            title="Loremasd"
            text="Loremsassdasd"
            textLink="#"
          />
          <FooterList
            className="col-ft-2 footer-list"
            title="Loremasd"
            text="Loremsassdasd"
            textLink="#"
          />
          <FooterList
            className="col-ft-3 footer-list"
            title="Loremasd"
            text="Loremsassdasd"
            textLink="#"
            icon1={iconRight1}
            icon2={iconRight2}
            icon3={iconRight3}
            iconLink="#"
          />
        </div>
      </div>
    </section>
  );
};
