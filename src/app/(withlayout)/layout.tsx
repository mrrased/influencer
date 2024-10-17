"use client";

import Contents from "@/components/Bar/Contents";
import { Layout } from "antd";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
        <Contents>{children}</Contents>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
