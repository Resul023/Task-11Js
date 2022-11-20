import "./CatalogBox.scss";

interface ICatalogBoxProps {
  className: string;
  image: string;
  textUp: string;
  textDown: string;
}

export const CatalogBox = (props: ICatalogBoxProps) => {
  const { className, image, textUp, textDown } = props;
  return (
    <div className={className}>
      <div className="image-container">
        <img src={image} alt="" />
        <div className="image-text">
          <p className="on-top">{textUp}</p>
          <p>{textDown}</p>
        </div>
      </div>
    </div>
  );
};
