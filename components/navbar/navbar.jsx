import { FaMapLocationDot } from "react-icons/fa6";
import { FaSearch, FaRegHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" w-[100px] h-screen sticky z-20 p-5 bg-slate-300 text-[30px] text-slate-700 shadow-xl">
      <ul className="flex flex-col gap-10 items-center">
        <li className="bg-slate-200 p-2 rounded-md hover:bg-slate-400 ">
          <FaMapLocationDot />
        </li>
        <li className="bg-slate-200 p-2 rounded-md hover:bg-slate-400 ">
          <FaSearch />
        </li>
        <li className="bg-slate-200 p-2 rounded-md hover:bg-slate-400 ">
          <FaRegHeart />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
