"use client";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <article className="flex flex-row items-center gap-5 bg-slate-300 p-2 px-5 rounded-lg">
      <FaSearch className="text-[24px] text-slate-500" />
      <input
        className=" outline-none p-2 bg-transparent text-[20px]"
        type="search"
        placeholder="search..."
        onKeyDown={(e) => e.key == "Enter" && console.log(e.target.value)}
      />
    </article>
  );
};

export default SearchBar;
