import { FaGasPump, FaHamburger } from "react-icons/fa";
import CategoryItem from "../categoryitem/categoryitem";
const Category = () => {
  const Category = [
    {
      id: 1,
      icon: <FaGasPump />,
      categoryName: "Gas Station",
    },
    {
      id: 2,
      icon: <FaHamburger />,
      categoryName: "Restaurants",
    },
    // {
    //   id: 3,
    //   icon: <FaHamburger />,
    //   categoryName: "Restaurants",
    // },
  ];

  return (
    <>
      <h3 className="text-[22px] font-bold">Select Your Fav Category</h3>
      <div className="flex items-center gap-5  bg-slate-300 p-4 rounded-md">
        {Category?.map((CategoryList) => {
          return (
            <CategoryItem key={CategoryList.id} CategoryList={CategoryList} />
          );
        })}
      </div>
    </>
  );
};

export default Category;
