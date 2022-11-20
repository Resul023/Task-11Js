import "./CompanyNewsBox.scss";
interface ICompanyNewsBoxProps {
  image: string;
  date: string;
  title: string;
  text: string;
}
export const CompanyNewsBox = (props: ICompanyNewsBoxProps) => {
  const { image, date, title, text } = props;
  return (
    <div className="col-pc-3 col-md-12">
      <div className="box-img">
        <img src={image} alt="" />
      </div>
      <div className="box-text">
        <span>{date}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
