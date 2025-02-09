import React from "react";
import backpackTypeImg from "../assets/images/backpack-type.jpg";
import duffleTypeImg from "../assets/images/duffle-type.jpeg";
import travelTypeImg from "../assets/images/travel-type.jpg";
import {
  BAG_TYPE_BACKPACK,
  BAG_TYPE_DUFFLE,
  BAG_TYPE_TRAVEL,
} from "../constants";
import { Link } from "react-router-dom";

const ProductType = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 text-white tracking-widest">
      <Link
        to={`/products?type=${BAG_TYPE_BACKPACK}`}
        className="relative w-full h-full"
      >
        <img className="w-full sm:h-full" src={backpackTypeImg} />
        <div className="absolute flex justify-center items-center bottom-0 w-full h-full text-3xl bg-black bg-opacity-50 hover:text-3xl sm:text-[0px] sm:bg-transparent hover:bg-black hover:bg-opacity-60 duration-500">
          <h1>BACKPACK</h1>
        </div>
      </Link>
      <Link
        to={`/products?type=${BAG_TYPE_DUFFLE}`}
        className="relative w-full h-full"
      >
        <img className="w-full sm:h-full" src={duffleTypeImg} />
        <div className="absolute flex justify-center items-center bottom-0 w-full h-full text-3xl bg-black bg-opacity-50 hover:text-3xl sm:text-[0px] sm:bg-transparent hover:bg-black hover:bg-opacity-60 duration-500">
          DUFFLE
        </div>
      </Link>
      <Link
        to={`/products?type=${BAG_TYPE_TRAVEL}`}
        className="relative w-full h-full"
      >
        <img className="w-full sm:h-full" src={travelTypeImg} />
        <div className="absolute flex justify-center items-center bottom-0 w-full h-full text-3xl bg-black bg-opacity-50 hover:text-3xl sm:text-[0px] sm:bg-transparent hover:bg-black hover:bg-opacity-60 duration-500">
          TRAVEL
        </div>
      </Link>
    </div>
  );
};

export default ProductType;
