import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center text-white w-full h-screen bg-black p-20">
      <FaExclamationTriangle size={40} />
      <h1 className="text-4xl mt-4">404 Not Found</h1>
      <p className="text-2xl mt-4">This page does not exist</p>
      <button
        className="mt-8 rounded-sm bg-slate-700 border-2 p-2 hover:bg-white hover:text-black hover:border-black text-xl"
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
