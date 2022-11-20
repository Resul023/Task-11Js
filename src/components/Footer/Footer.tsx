import "./Footer.scss";
import { FooterBottom } from "./FooterBottom/FooterBottom";
import { FooterHead } from "./FooterHead/FooterHead";

export const Footer = () => {
  return (
    <>
      <FooterHead
        iconLeftTitle="Loremasdas"
        iconLeftText="Lorem ipsum dolor"
        inputText="Write your email"
        buttonText="Send It"
        iconRightTitle="Lorem Ipsumasd"
      />
      <FooterBottom />
    </>
  );
};
