import React from "react";
import backpackTypeImg from "../assets/images/backpack-type.jpg";
import duffleTypeImg from "../assets/images/duffle-type.jpeg";
import travelTypeImg from "../assets/images/travel-type.jpg";
import {
  BAG_TYPE_BACKPACK,
  BAG_TYPE_DUFFLE,
  BAG_TYPE_TRAVEL,
} from "../constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductType } from "../features/appSlice";

const ProductType = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick = (type) => {
    dispatch(setProductType(type));
    navigate("/products");
  };

  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 text-white tracking-widest">
      <a
        href="#top"
        onClick={() => handleOnClick(BAG_TYPE_BACKPACK)}
        className="relative w-full h-full"
      >
        <img className="w-full sm:h-full" src={backpackTypeImg} />
        <div className="absolute flex justify-center items-center bottom-0 w-full h-full text-[0px] hover:text-3xl hover:bg-black hover:bg-opacity-60 duration-500">
          <h1>BACKPACK</h1>
        </div>
      </a>
      <a
        href="#top"
        onClick={() => handleOnClick(BAG_TYPE_DUFFLE)}
        className="relative w-full h-full"
      >
        <img className="w-full sm:h-full" src={duffleTypeImg} />
        <div className="absolute flex justify-center items-center bottom-0 w-full h-full text-[0px] hover:text-3xl hover:bg-black hover:bg-opacity-60 duration-500">
          DUFFLE
        </div>
      </a>
      <a
        href="#top"
        onClick={() => handleOnClick(BAG_TYPE_TRAVEL)}
        className="relative w-full h-full"
      >
        <img className="w-full sm:h-full" src={travelTypeImg} />
        <div className="absolute flex justify-center items-center bottom-0 w-full h-full text-[0px] hover:text-3xl hover:bg-black hover:bg-opacity-60 duration-500">
          TRAVEL
        </div>
      </a>
    </div>
  );
};

export default ProductType;
