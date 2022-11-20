import { FeaturedBox } from "../../../../components/FeaturedBox/FeaturedBox";
import "./Featured.scss";
import iconn from "./diamond.svg";

export const Featureds = () => {
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <FeaturedBox
            icon={iconn}
            textUp="asdasasdasdasdd"
            textDown="asdasda"
          />
          <FeaturedBox
            icon={iconn}
            textUp="asdasdasdasdaasd"
            textDown="asdasda"
          />
          <FeaturedBox icon={iconn} textUp="asdasd" textDown="asdasda" />
          <FeaturedBox icon={iconn} textUp="asdasd" textDown="asdasda" />
          <FeaturedBox icon={iconn} textUp="asdasd" textDown="asdasda" />
        </div>
      </div>
    </section>
  );
};
