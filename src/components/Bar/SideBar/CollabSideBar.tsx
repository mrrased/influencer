import {
  ci,
  food,
  fashion,
  fitness,
  beauty,
  technology,
  home,
} from "@/constants/image";
import Image from "next/image";

type ICategories = {
  id: number;
  title: string;
  icon: string;
};

const CollabSideBar = () => {
  const data = [
    {
      id: 1,
      title: "Food & Culinary",
      icon: food,
    },
    {
      id: 2,
      title: "Fashion & Style",
      icon: fashion,
    },
    {
      id: 3,
      title: "Beauty & MakeUp",
      icon: beauty,
    },
    {
      id: 4,
      title: "Fitness & Wellness",
      icon: fitness,
    },
    {
      id: 5,
      title: "Technology",
      icon: technology,
    },
    {
      id: 6,
      title: "Home & Decor",
      icon: home,
    },
  ];
  return (
    <div className="mt-14 bg-white p-8 shadow-md rounded-md">
      <div className="flex space-x-2">
        <Image src={ci} alt="categories icon" width={20} height={20} />
        <span>Categories</span>
      </div>
      <ul className="mt-14">
        {data.map((item: ICategories, i: number) => {
          return (
            <li key={i} className="mb-8">
              <ul className="flex items-center space-x-3">
                <li>
                  <Image src={item.icon} alt="food" width={40} height={40} />
                </li>
                <li className="text-base font-sans">{item.title}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CollabSideBar;
