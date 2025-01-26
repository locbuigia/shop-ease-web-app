import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import items from "../data/products.json";
import Product from "./Product";
import Divider from "./Divider";

const ProductCarousel = ({
  currentItemId = null,
  showDivider = false,
  title = "Products you might like",
}) => {
  const [itemsToShow, setItemsToShow] = useState(
    window.innerWidth < 1200 ? 1 : 3
  );

  useEffect(() => {
    const updateWindowDimensions = () => {
      setItemsToShow(window.innerWidth < 1200 ? 1 : 3);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, [window.innerWidth]);

  let settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: itemsToShow,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-2 md:p-10 text-white">
      {showDivider && <Divider />}
      <h1 className="text-xl md:text-2xl mt-5 mb-5">{title}</h1>
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
