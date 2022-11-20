import { useState } from "react";
import { IProduct } from "../../models/ProductModel";
import { ProductBox } from "../../components/ProductBox/ProductBox";
import productImage from "../../assets/images/product.png";
import "./Carousel.scss";
interface ICarouselProps {
  title: string;
  products: IProduct[];
}

export const Carousel = (props: ICarouselProps) => {
  const productCardWidth = 394;
  const { title, products } = props;
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  const leftButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber - 1);
  };

  const rightButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber + 1);
  };

  return (
    <section id="products">
      <div className="container">
        <div className="head-text">
          <h3>{title}</h3>
        </div>
        <div className="row">
          <button
            className="arrow arrow-left"
            disabled={currentSlideNumber === 0}
            onClick={leftButtonClickHandler}
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.15517 13.8552C7.25172 13.9517 7.37241 14 7.50517 14C7.63793 14 7.75862 13.9517 7.85517 13.8552C8.04828 13.6621 8.04828 13.3483 7.85517 13.1552L1.7 7L7.85517 0.844828C8.04828 0.651724 8.04828 0.337931 7.85517 0.144828C7.66207 -0.0482759 7.34828 -0.0482759 7.15517 0.144828L0.65 6.65C0.456896 6.8431 0.456896 7.1569 0.65 7.35L7.15517 13.8552Z"
                fill="black"
              />
            </svg>
          </button>
          <button
            className="arrow arrow-right"
            disabled={currentSlideNumber === products.length - 3}
            onClick={rightButtonClickHandler}
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.844828 0.144828C0.748276 0.0482759 0.627586 0 0.494828 0C0.362069 0 0.241379 0.0482759 0.144828 0.144828C-0.0482759 0.337931 -0.0482759 0.651725 0.144828 0.844828L6.3 7L0.144828 13.1552C-0.0482759 13.3483 -0.0482759 13.6621 0.144828 13.8552C0.337931 14.0483 0.651724 14.0483 0.844828 13.8552L7.35 7.35C7.5431 7.1569 7.5431 6.8431 7.35 6.65L0.844828 0.144828Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="product-container">
            {products.map((product, index) => (
              <ProductBox
                name={product.name}
                category={product.category}
                image={productImage}
                price1={product.price1}
                price2={product.price1}
                price3={product.price1}
                price4={product.price1}
                marginLeft={
                  index === 0
                    ? `${-productCardWidth * currentSlideNumber}px`
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
