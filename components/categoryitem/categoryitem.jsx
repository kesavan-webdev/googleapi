const CategoryItem = ({ CategoryList }) => {
  return (
    <div
      key={CategoryList.id}
      className="flex flex-col justify-center items-center bg-slate-200 p-4 rounded-lg hover:bg-slate-400 hover:text-white hover:cursor-pointer hover:scale-110 transition-all duration-150"
    >
      <span>{CategoryList.icon}</span>
      <span>{CategoryList.categoryName}</span>
    </div>
  );
};

export default CategoryItem;
