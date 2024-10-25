import React from "react";
import ToolbarDynamic from "./ToolbarDynamic";

const HomeSearch = () => {
  return (
    <div>
      <div>
        <h5 className="text-5xl font-bold text-center text-blue mt-20">
          Explore Influencer Impact
        </h5>
      </div>
      <div className="mx-32 mt-20 flex justify-center">
        <ToolbarDynamic />
      </div>
    </div>
  );
};

export default HomeSearch;
