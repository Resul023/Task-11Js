import { GuaranteeBox } from "../../../../components/GuaranteeBox/GuaranteeBox";
import "./Guarantee.scss";
import icon from "./diamond.svg";
interface IGuaranteeProps {
  title: string;
  text: string;
  buttonText: string;
}
export const Guarantee = (props: IGuaranteeProps) => {
  const { title, text, buttonText } = props;
  return (
    <section id="guarantee">
      <div className="container">
        <div className="row">
          <div className="guarantee-head">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          <div className="guarantee-body d-flex">
            <GuaranteeBox
              upText="Lorem ipsum asdasd."
              downText="lorem asdw"
              icon={icon}
            />
            <GuaranteeBox
              upText="Lorem ipsum asdasd."
              downText="lorem asdw"
              icon={icon}
            />
            <GuaranteeBox
              upText="Lorem ipsum asdasd."
              downText="lorem asdw"
              icon={icon}
            />
            <GuaranteeBox
              upText="Lorem ipsum asdasd."
              downText="lorem asdw"
              icon={icon}
            />
          </div>
          <div className="guarantee-bottom">
            <button className="guarantee-bottom-btn">{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
