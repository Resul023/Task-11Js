import "./GuaranteeBox.scss";
interface IGuaranteeProps {
  upText: string;
  downText: string;
  icon: string;
}
export const GuaranteeBox = (props: IGuaranteeProps) => {
  const { upText, downText, icon } = props;
  return (
    <div className="col-3 col-md-12 box-item">
      <p>
        {upText}
        <br />
        {downText}
      </p>
      <img src={icon} alt="" />
    </div>
  );
};
