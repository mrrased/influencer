import Wishlist from "@/components/Wishlist/Wishlist";

import { BUSINESS_NAME, TAG_LINE } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Favourites - ${BUSINESS_NAME}`,
  description: `${TAG_LINE} - This is Favourites Page`,
};

const MyFavouritesPage = () => {
  return (
    <div>
      <Wishlist />
    </div>
  );
};

export default MyFavouritesPage;
