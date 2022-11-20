import { CompanyNewsBox } from "../../../../components/CompanyNewsBox/CompanyNewsBox";
import "./CompanyNews.scss";
import image1 from "./assets/company1.png";
import image2 from "./assets/company2.png";
import image3 from "./assets/company3.png";
interface ICompanyNewsProps {
  title: string;
  buttonText: string;
}
export const CompanyNews = (props: ICompanyNewsProps) => {
  const { title, buttonText } = props;
  return (
    <section id="company-news">
      <div className="container">
        <div className="row">
          <div className="company-news-head">
            <h1>{title}</h1>
          </div>
          <div className="company-news-body d-flex">
            <CompanyNewsBox
              image={image1}
              date="7 april 2012"
              title="Lorem ipsum dolor sit"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non repellat nisi eaque alias exercitationem,"
            />
            <CompanyNewsBox
              image={image2}
              date="7 april 2012"
              title="Lorem ipsum dolor sit"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non repellat nisi eaque alias exercitationem,"
            />
            <CompanyNewsBox
              image={image3}
              date="7 april 2012"
              title="Lorem ipsum dolor sit"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non repellat nisi eaque alias exercitationem,"
            />
          </div>
          <div className="company-news-footer">
            <button>{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
