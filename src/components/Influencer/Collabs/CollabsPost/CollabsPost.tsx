import { collab1, collab2, collab3 } from "@/constants/image";

import Image from "next/image";

type ICollab = {
  id: number;
  title: string;
  payment: string;
  socialRange: string;
  img: string;
};

const CollabsPost = () => {
  const data = [
    {
      id: 1,
      title: "Myntra",
      payment: "paid",
      socialRange: "1k - 30M Followers",
      img: collab1,
    },
    {
      id: 2,
      title: "My Glamm",
      payment: "paid",
      socialRange: "1k - 30M Followers",
      img: collab2,
    },
    {
      id: 3,
      title: "Amazon",
      payment: "paid",
      socialRange: "1k - 30M Followers",
      img: collab3,
    },
    {
      id: 4,
      title: "Myntra",
      payment: "paid",
      socialRange: "1k - 30M Followers",
      img: collab2,
    },
  ];
  return (
    <div className="flex justify-center mt-32">
      <div>
        {data.map((item: ICollab, i: number) => {
          return (
            <div key={i} className="bg-white mb-10 p-4 rounded-md">
              <div>
                <Image
                  src={item.img}
                  alt={`${item.title}`}
                  width={850}
                  height={378}
                />
              </div>
              <ul className="flex items-center space-x-3 mt-6 mb-4">
                <li className="text-lg font-medium text-black">{item.title}</li>
                <li className="border-r-2 border-gray-700 h-4 leading-4 mt-1"></li>
                <li className="capitalize ">{item.payment}</li>
                <li className="border-r-2 border-gray-700 h-4 mt-1"></li>
                <li>{item.socialRange}</li>
              </ul>
              <div className="border-b border-gray-400"></div>
              <h5 className="text-right text-blue text-xl mt-5 cursor-pointer hover:underline">
                View Details
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollabsPost;
