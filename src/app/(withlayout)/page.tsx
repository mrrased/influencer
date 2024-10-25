import Home from "@/components/Home/Home";
import { BUSINESS_NAME, TAG_LINE } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${BUSINESS_NAME}`,
  description: `${TAG_LINE} - This is Home Page`,
};

const HomePage = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
