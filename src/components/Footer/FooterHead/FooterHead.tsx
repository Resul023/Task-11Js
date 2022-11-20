import "./FooterHead.scss";
import iconLeft from "./message.svg";
import iconRight from "./phone.svg";
interface IFooterHeadProps {
  iconLeftTitle: string;
  iconLeftText: string;
  inputText: string;
  buttonText: string;
  iconRightTitle: string;
}
export const FooterHead = (props: IFooterHeadProps) => {
  const { iconLeftTitle, iconLeftText, inputText, buttonText, iconRightTitle } =
    props;
  return (
    <section id="footer-head">
      <div className="container">
        <div className="row d-flex">
          <div className="message-text">
            <img src={iconLeft} alt="" />
            <p>
              <span>{iconLeftTitle}</span>
              <br />
              {iconLeftText}
            </p>
          </div>
          <div className="input-btn">
            <input type="text" placeholder={inputText} />
            <button>{buttonText}</button>
          </div>
          <div className="call-phone d-flex">
            <img src={iconRight} alt="" />
            <p>{iconRightTitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
