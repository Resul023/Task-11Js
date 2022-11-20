import "./FeaturedBox.scss";
interface IFeaturedBoxProps {
  icon: string;
  textUp: string;
  textDown: string;
}
export const FeaturedBox = (props: IFeaturedBoxProps) => {
  const { icon, textUp, textDown } = props;
  return (
    <div className="col-2 col-md-12 box-featured">
      <div className="featured-container">
        <div className="featured-icon">
          <img src={icon} alt="" />
        </div>
        <div className="featured-text">
          <p>
            {textUp} <br />
            {textDown}
          </p>
        </div>
      </div>
    </div>
  );
};
