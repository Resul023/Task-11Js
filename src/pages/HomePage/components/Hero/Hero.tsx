import React from "react";
import "./Hero.scss";
import image from "./header.png";
interface IHeroProps {
  upTextLeft: string;
  upTextRight: string;
  middleText: string;
  downText: string;
}
export const Hero = (props: IHeroProps) => {
  const { upTextLeft, upTextRight, middleText, downText } = props;
  return (
    <section id="hero-img" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-circle"></div>
      <div className="circle-text">
        <p>
          <span>{upTextLeft}</span> {upTextRight}.
        </p>
        <p>{middleText}</p>
        <p>{downText}.</p>
      </div>
    </section>
  );
};
