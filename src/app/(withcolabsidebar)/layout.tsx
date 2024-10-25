"use client";

import ColabContent from "@/components/Bar/ColabContent";
import { Layout } from "antd";

const Colablayout = ({ children }: { children: React.ReactNode }) => {
  //   const router = useRouter();
  // const [isMobile, setIsMobile] = useSt

  // const cookieStore = cookies();
  // const hasCookie = cookieStore.get("XSRF-TOKEN");
  // console.log(hasCookie, "cookies");

  // window.addEventListener("resize", () => {
  //   setIsMobile(window.innerWidth <= 425);
  // });

  return (
    <Layout hasSider className="bg-[#fbf6f0]">
      {/* <SideBar /> */}

      <Layout>
        <ColabContent>{children}</ColabContent>
      </Layout>
    </Layout>
  );
};

export default Colablayout;
