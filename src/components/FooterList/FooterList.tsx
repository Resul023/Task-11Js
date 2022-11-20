import "./FooterList.scss";
import { FooterListLeftSide } from "./FooterListLeftSide";

interface IFooterListRightSide {
  icon1?: string;
  icon2?: string;
  icon3?: string;
  iconLink?: string;
}
interface IFooterListProps extends IFooterListRightSide {
  className: string;
  title: string;
  text: string;
  textLink: string;
}
export const FooterList = (props: IFooterListProps) => {
  const { className, title, text, textLink, icon1, icon2, icon3, iconLink } =
    props;
  return (
    <div className={className}>
      <h4>{title}</h4>
      <ul>
        <li>
          <a href={textLink}>{text}</a>
        </li>
        <li>
          <a href={textLink}>{text}</a>
        </li>
        <li>
          <a href={textLink}>{text}</a>
        </li>
        <li>
          <a href={textLink}>{text}</a>
        </li>
        {icon1 && (
          <ul className="cart-list">
            <li>
              <a href={iconLink}>
                <img src={icon1} alt="" />
              </a>
            </li>
            <li>
              <a href={iconLink}>
                <img src={icon2} alt="" />
              </a>
            </li>
            <li>
              <a href={iconLink}>
                <img src={icon3} alt="" />
              </a>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};
