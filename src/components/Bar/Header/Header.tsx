import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";

const Header = () => {
  return (
    <div className="absolute w-with z-30">
      <div id="header-style">
        <div className="mx-[100px]">
          <ul className="flex justify-between leading-[70px]">
            <li className="text-3xl leading-[70px] font-bold text-blue">
              Logo
            </li>
            <li>
              <ul className="flex items-center space-x-7 text-xl leading-[70px] text-black font-medium cursor-pointer">
                <li>Coures</li>
                <li>Collabs</li>
                <li>Campaigns</li>
                <li>
                  <ul className="flex space-x-3">
                    <li>
                      <AiOutlineHeart />
                    </li>
                    <li>
                      <AiOutlineMessage />
                    </li>
                    <li>
                      <AiOutlineSearch />
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href={`/login`}
                    className="flex items-center space-x-2 bg-blue h-9 px-4 text-[#FEFEFE] rounded-md cursor-pointer"
                  >
                    <AiOutlineUser />
                    <span>Sign In</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
