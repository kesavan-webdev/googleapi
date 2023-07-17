import Image from "next/image";
import { FaStar } from "react-icons/fa";

const BussinessItem = () => {
  return (
    <div className="flex items-center justify-start border-b-2 p-3 gap-5">
      <Image src={"/"} width={50} height={50} alt="" />
      <div className="flex flex-col">
        <h3 className="text-[22px] ">{"aaaaaaaaaaa"}</h3>
        <p className="text-slate-400 ">{"bbbbbbbbbb"}</p>
        <p className="flex items-center gap-2 ">
          <FaStar className="text-yellow-500" />
          <span className="font-bold">{"4.5"}</span>
        </p>
      </div>
    </div>
  );
};

export default BussinessItem;
