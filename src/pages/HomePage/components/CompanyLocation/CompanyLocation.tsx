import { CompanyLocationBox } from "../../../../components/CompanyLocationBox/CompanyLocationBox";
import "./CompanyLocation.scss";
import icon from "./camera.svg";
import map from "./for-map.png";
interface ICompanyLocation {
  title: string;
}
export const CompanyLocation = (props: ICompanyLocation) => {
  const { title } = props;
  return (
    <section id="company-location">
      <img className="map" src={map} alt="" />

      <div className="container">
        <div className="row">
          <div className="company-location-head">
            <h1>{title}</h1>
          </div>
          <div className="company-location-body">
            <CompanyLocationBox
              icon={icon}
              title="Lorem Ipsum"
              text="lorem ipsum 23"
              link="#"
              linkText="google.com"
            />
            <CompanyLocationBox
              icon={icon}
              title="Lorem Ipsum"
              text="lorem ipsum 23"
              link="#"
              linkText="google.com"
            />
            <CompanyLocationBox
              icon={icon}
              title="Lorem Ipsum"
              text="lorem ipsum 23"
              link="#"
              linkText="google.com"
            />
            <CompanyLocationBox
              icon={icon}
              title="Lorem Ipsum"
              text="lorem ipsum 23"
              link="#"
              linkText="google.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
