interface IFooterListLeftSideProps {
  className: string;
  logo: string;
  text1: string;
  text2: string;
  icon1: string;
  icon2: string;
  icon3: string;
  icon4: string;
  icon5: string;
  iconLink: string;
}
export const FooterListLeftSide = (props: IFooterListLeftSideProps) => {
  const {
    className,
    logo,
    text1,
    text2,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    iconLink,
  } = props;
  return (
    <div className={className}>
      <img src={logo} alt="" />
      <p>{text1}</p>
      <p>{text2}</p>
      <ul className="d-flex">
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
        <li>
          <a href={iconLink}>
            <img src={icon4} alt="" />
          </a>
        </li>
        <li>
          <a href={iconLink}>
            <img src={icon5} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};
