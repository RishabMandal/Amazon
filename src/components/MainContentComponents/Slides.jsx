import React, { useEffect } from "react";
// import "../home/home.css";
import Slide from "./Slide";
import { Divider } from "@mui/material";
// import { getProducts } from "../redux/actions/action";
// import { useSelector, useDispatch } from "react-redux";
import { products } from "./productData";

const Slides = () => {
  //   const { products } = useSelector((state) => state.getproductsdata);
  //   // console.log(products);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getProducts());
  //   }, [dispatch]);

  return (
    <>
      <div className="home_section pr-4">
        <Slide
          title="Deal Of The Day"
          products={products}
          productType="foundation"
        />
        <div className="slide_part flex items-center bg-white mx-4 mt-3">
          {/* <div className="left_slide w-[80%] ">
            <Slide
              title="Deal Of The Day"
              products={products}
              productType="foundation"
            />
          </div>
          <div className="right_slide w-[20%] ">
            <h4>Festive latest launches</h4>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
              alt="rightimg"
            />
            <a href="#">see more</a>
          </div> */}
        </div>

        <Slide
          title="Today's Deals"
          products={products}
          productType="lipstick"
        />

        <div className="center_img block w-[80%] mx-auto my-[13px] ">
          <img
            src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            alt=""
            className="mx-auto"
          />
        </div>

        <Slide title="Best Seller" products={products} productType="eyeliner" />
        <Slide title="Upto 80% off" products={products} productType="mascara" />
      </div>

      <Divider />
    </>
  );
};

export default Slides;
