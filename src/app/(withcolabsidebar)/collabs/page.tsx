import CollabsPost from "@/components/Influencer/Collabs/CollabsPost/CollabsPost";

import { BUSINESS_NAME, TAG_LINE } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Collabs - ${BUSINESS_NAME}`,
  description: `${TAG_LINE} - This is Collabs Page`,
};

const CollabsPage = () => {
  return (
    <div>
      <CollabsPost />
    </div>
  );
};

export default CollabsPage;
