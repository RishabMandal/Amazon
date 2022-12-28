import React, { useEffect, useState } from "react";
// import "../home/slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { products } from "./productData";
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ title, products, productType }) => {
  const [productJSON, setproductJSON] = useState();

  useEffect(() => {
    axios
      .get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=${productType}`
      )
      .then((response) => {
        setproductJSON(response.data);
      });
  }, []);

  return (
    <div className="products_section bg-white w-[98%] justify-between items-center px-[20px] m-4">
      <div className="products_deal flex items-center p-4 mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <button className="view_btn mx-2 text-blue-700">
          <NavLink to="/products" className="text-sm">
            View all
          </NavLink>
        </button>
      </div>
      {/* <Divider /> */}

      {/* <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((e) => {
          return (
            <NavLink to={`/getproductsone/${e.id}`}>
              <div className="products_items">
                <div className="product_img">
                  <img
                    className="w-[150px] mt-[4px] "
                    src={e.url}
                    alt="product"
                  />
                </div>
                <p className="products_name mt-[10px] ">{e.title.shortTitle}</p>
                <p
                  className="products_offer mt-[10px] "
                  style={{ color: "#  007185" }}
                >
                  {e.discount}
                </p>
                <p className="products_explore mt-[10px] ">{e.tagline}</p>
              </div>
            </NavLink>
          );
        })}
      </Carousel> */}
      {/* // */}
      {productJSON && (
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={true}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          showDots={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {productJSON.map((product,index) => {
            return (
            //   <key={index}>
                <NavLink to={`/getproductsone/${product.id}`} key={index}>
                  <div className="products_items">
                    <div className="product_img">
                      <img
                        className="w-[150px] mt-[4px] "
                        src={product.image_link}
                        alt="product"
                      />
                    </div>
                    <p className="products_name mt-[10px] text-left px-1">
                      {product.name}
                    </p>
                    <span className="flex items-center text-xs">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-amber-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-amber-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-amber-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-amber-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 text-amber-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="text-gray-600 ml-3">
                        {Math.floor(product.price * 9)} Reviews
                      </span>
                    </span>
                    <div
                      className="products_offer "
                      style={{ color: "#  007185" }}
                    >
                      <div className="flex">
                        <p>₹</p>
                        <p className="text-black">
                          {Math.ceil(product.price * 80)}.00
                        </p>
                      </div>
                      <div className="text-xs text-left line-through">
                        M.R.P: ₹{Math.ceil(product.price * 135)}
                      </div>
                    </div>
                  </div>
                </NavLink>
            //   </key=>
            );
          })}
        </Carousel>
      )}
      {/* // */}
    </div>
  );
};

export default Slide;
