import React from "react";
import Slider from "react-slick";

import items from "../data/products.json";
import Product from "./Product";
import Divider from "./Divider";

const ProductCarousel = ({ currentItemId }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 720 ? 1 : 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-2 md:p-10">
      <Divider />
      <h1 className="text-xl sm:text-2xl mt-5 mb-5">Products you might like</h1>
      <div className="w-full h-1/4">
        <Slider {...settings}>
          {items.map(
            (item) =>
              [1, 6, 19, 13, 4, 7, 16, 3].includes(item.id) &&
              item.id !== currentItemId && <Product key={item.id} item={item} />
          )}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
