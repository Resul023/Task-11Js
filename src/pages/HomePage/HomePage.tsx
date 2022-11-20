import { Hero } from "./components/Hero/Hero";
import { Featureds } from "./components/Featured/Featured";
import "./HomePage.scss";
import { Carousel } from "../../components/Carousel/Carousel";
import { Catalog } from "./components/Catalog/Catalog";
import { Guarantee } from "./components/Guarantee/Guarantee";
import { CompanyNews } from "./components/CompanyNews/CompanyNews";
import { CompanyLocation } from "./components/CompanyLocation/CompanyLocation";

export const HomePage = () => {
  const box = {
    name: "Lorem ipsum",
    category: "Camera",
    price1: 500,
    price2: 15.5,
    price3: 1500,
    price4: 2500,
  };
  let dataBase = [];
  dataBase.push(box);
  dataBase.push(box);
  dataBase.push(box);
  dataBase.push(box);
  dataBase.push(box);
  dataBase.push(box);
  dataBase.push(box);
  dataBase.push(box);
  return (
    <>
      <Hero
        upTextLeft="Lorem"
        upTextRight="Ipsum"
        middleText="Lorem"
        downText="Lorem Ipsum"
      />
      <Featureds />
      <Carousel title="Lorem Ipsum" products={dataBase} />
      <Catalog />
      <Guarantee
        title="Lorem ipsum dolor sit"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure doloribus architecto nulla adipisci Iure doloribus architecto nulla adipisci?"
        buttonText="Lorem Ipsum Dolar"
      />
      <CompanyNews title="LOREM IPSUM" buttonText="LOREM IPSUM" />
      <CompanyLocation title="LOREM IPSUM DOLOR SIT" />
    </>
  );
};
