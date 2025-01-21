import React from "react";
import backpackImg from "../assets/images/backpack-type.jpg";
import duffleImg from "../assets/images/duffle-type.jpeg";
import travelImg from "../assets/images/travel-type.jpg";
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
    <div className="w-full h-full grid grid-cols-3 font-serif text-white tracking-widest">
      <a
        href="#top"
        onClick={() => handleOnClick(BAG_TYPE_BACKPACK)}
        className="relative w-full h-full"
      >
        <img className="w-full h-[42rem]" src={backpackImg} />
        <div className="absolute flex justify-center items-center bottom-0 w-full h-full text-[0px] hover:text-3xl hover:bg-black hover:bg-opacity-60 duration-500">
          <h1>BACKPACK</h1>
        </div>
      </a>
      <a
        href="#top"
        onClick={() => handleOnClick(BAG_TYPE_DUFFLE)}
        className="relative w-full h-full"
      >
        <img className="w-full h-[42rem]" src={duffleImg} />
        <div className="absolute flex justify-center items-center bottom-0 w-full h-full text-[0px] hover:text-3xl hover:bg-black hover:bg-opacity-60 duration-500">
          DUFFLE
        </div>
      </a>
      <a
        href="#top"
        onClick={() => handleOnClick(BAG_TYPE_TRAVEL)}
        className="relative w-full h-full"
      >
        <img className="w-full h-[42rem]" src={travelImg} />
        <div className="absolute flex justify-center items-center bottom-0 w-full h-full text-[0px] hover:text-3xl hover:bg-black hover:bg-opacity-60 duration-500">
          TRAVEL
        </div>
      </a>
    </div>
  );
};

export default ProductType;
