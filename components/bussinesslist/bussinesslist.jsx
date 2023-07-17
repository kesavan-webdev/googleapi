"use client";
import { useEffect, useState } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import BussinessItem from "../bussinessitem/bussinessitem";
const BussinessList = () => {
  const [bussinessList, setBussinessList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setBussinessList([1, 2, 3]);
  }, []);
  return (
    <div>
      <span className="flex items-center justify-between">
        <h2 className="capitalize font-bold text-[22px] ">top nearby places</h2>
        <span className="flex gap-5">
          {count > 0 && (
            <FaCircleArrowLeft
              className=" text-slate-400 hover:text-slate-800 text-[22px]"
              onClick={() => setCount((c) => c - 1)}
            />
          )}
          <FaCircleArrowRight
            className=" text-slate-400 hover:text-slate-800 text-[22px]"
            onClick={() => setCount((c) => c + 1)}
          />
        </span>
      </span>
      {bussinessList.map((list) => {
        return <BussinessItem key={list.id} />;
      })}
    </div>
  );
};

export default BussinessList;
