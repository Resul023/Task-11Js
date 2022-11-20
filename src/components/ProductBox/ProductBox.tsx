import "./ProductBox.scss";
import icon1 from "../../assets/icons/product-icon-1.svg";
import icon2 from "../../assets/icons/product-icon-2.svg";
interface IProductBoxProps {
  name: string;
  category: string;
  image: string;
  price1: number;
  price2: number;
  price3: number;
  price4: number;
  marginLeft?: string;
}
export const ProductBox = (props: IProductBoxProps) => {
  const { name, category, image, price1, price2, price3, price4, marginLeft } =
    props;
  return (
    <div
      className="col-bx-4 col-md-12 product-box"
      style={marginLeft ? { marginLeft: marginLeft } : {}}
    >
      <div className="product">
        <div className="product-head">
          <div className="product-image">
            <img src={image} alt="" />
          </div>
          <div className="product-name">
            <h3>{name}</h3>
            <span>{category}</span>
          </div>
          <div className="product-head-icons">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
          </div>
        </div>
        <div className="product-body d-flex">
          <div className="price-box">
            <p>{price1}$</p>
            <span>Lorem</span>
          </div>
          <div className="price-box">
            <p>{price2}$</p>
            <span>Loreasm</span>
          </div>
          <div className="price-box">
            <p>{price3}$</p>
            <span>Lorem</span>
          </div>
          <div className="price-box">
            <p>{price4}$</p>
            <span>Lorem</span>
          </div>
        </div>
        <div className="product-footer d-flex">
          <div className="btn">
            <p>Buy</p>
          </div>
          <div className="btn btn-green">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Add Basket</p>
          </div>
        </div>
      </div>
    </div>
  );
};
