import "./Catalog.scss";
import { CatalogBox } from "../../../../components/CatalogBox/CatalogBox";
import image1 from "./assets/photo1.png";
import image2 from "./assets/photo2.png";
import image3 from "./assets/photo3.png";
import image4 from "./assets/photo4.png";
import image5 from "./assets/photo5.png";

export const Catalog = () => {
  return (
    <section id="camera-desc">
      <div className="container">
        <div className="row">
          <div className="desc-head">
            <h1>Lorem ipsum dolor sit?</h1>
            <p>
              Lorem <strong>ipsum</strong> dolor sit amet, consectetur
              adipisicing elit. Sapiente, consequatur blanditiis. Cumque quo,
              impedit dignissimos modi quidem fugiat consequuntur, veritatis
              animi mollitia velit dolore quas, delectus molestiae culpa
              blanditiis obcaecati. Modi, iusto odit distinctio quos adipisci
              maxime quae. Quia itaque molestias quibusdam voluptate eligendi
            </p>
            <div className="search-btn">
              <button>Перейти в Каталог</button>
              <div className="input-area">
                <div className="search-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8246 18.98L14.9643 14.1197C16.268 12.6208 17.0574 10.6652 17.0574 8.52772C17.0574 3.82262 13.2303 0 8.52967 0C3.82457 0 0.00195312 3.82705 0.00195312 8.52772C0.00195312 13.2284 3.829 17.0554 8.52967 17.0554C10.6671 17.0554 12.6228 16.2661 14.1217 14.9623L18.982 19.8226C19.0973 19.9379 19.2525 20 19.4033 20C19.5541 20 19.7093 19.9424 19.8246 19.8226C20.0552 19.592 20.0552 19.2106 19.8246 18.98ZM1.19486 8.52772C1.19486 4.48337 4.48532 1.19734 8.52524 1.19734C12.5696 1.19734 15.8556 4.4878 15.8556 8.52772C15.8556 12.5676 12.5696 15.8625 8.52524 15.8625C4.48532 15.8625 1.19486 12.5721 1.19486 8.52772Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <div className="close-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                      fill="black"
                    />
                    <g clip-path="url(#clip0_862_1129)">
                      <path
                        d="M14.8817 5.1188C14.7239 4.96105 14.4682 4.96105 14.3104 5.1188L5.11832 14.3109C4.96056 14.4687 4.96056 14.7244 5.11832 14.8822C5.19718 14.9611 5.30058 15.0005 5.40396 15.0005C5.50734 15.0005 5.61072 14.9611 5.6896 14.8821L14.8817 5.69005C15.0394 5.53232 15.0394 5.27656 14.8817 5.1188Z"
                        fill="white"
                      />
                      <path
                        d="M14.8817 14.3104L5.68957 5.11832C5.53183 4.96056 5.27605 4.96056 5.11832 5.11832C4.96056 5.27605 4.96056 5.53181 5.11832 5.68957L14.3104 14.8817C14.3893 14.9606 14.4927 15 14.5961 15C14.6994 15 14.8028 14.9606 14.8817 14.8817C15.0394 14.7239 15.0394 14.4682 14.8817 14.3104Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_862_1129">
                        <rect
                          width="10"
                          height="10"
                          fill="white"
                          transform="translate(5 5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <input type="text" value="Search" />
              </div>
            </div>
          </div>
          <div className="desc-body">
            <div className="row">
              <CatalogBox
                className="col-pc-3"
                image={image1}
                textUp="Lorem ipsum dolor"
                textDown="Lorem ipsum"
              />
              <CatalogBox
                className="col-pc-3"
                image={image2}
                textUp="Lorem ipsum dolor"
                textDown="Lorem ipsum"
              />
              <CatalogBox
                className="col-pc-3"
                image={image3}
                textUp="Lorem ipsum dolor"
                textDown="Lorem ipsum"
              />
              <CatalogBox
                className="col-pc-6"
                image={image4}
                textUp="Lorem ipsum dolor"
                textDown="Lorem ipsum"
              />
              <CatalogBox
                className="col-pc-3"
                image={image5}
                textUp="Lorem ipsum dolor"
                textDown="Lorem ipsum"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
