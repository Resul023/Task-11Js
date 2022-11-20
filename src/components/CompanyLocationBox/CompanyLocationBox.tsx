import "./CompanyLocationBox.scss";
interface ICompanyLocationBoxProps {
  icon: string;
  title: string;
  text: string;
  link: string;
  linkText: string;
}
export const CompanyLocationBox = (props: ICompanyLocationBoxProps) => {
  const { icon, title, text, link, linkText } = props;
  return (
    <div className="col-cl-4 col-md-12 location-box">
      <div className="icon-text d-flex">
        <img src={icon} alt="" />
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
      <a className="mt-1" href={link}>
        {linkText}
      </a>
    </div>
  );
};
