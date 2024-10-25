"use client";

import { Col, Layout, Row } from "antd";
import Headers from "./Header/Headers";

const { Content } = Layout;

const CommonContent = ({ children }: { children: React.ReactNode }) => {
  //   const base = "admin";
  //   const FrontHeader = dynamic(() => import("../header/Header"), { ssr: false });
  return (
    <Content style={{ minHeight: "100vh", overflow: "initial" }}>
      <div className="w-with mx-auto">
        <Headers />
      </div>
      {/* <div className="w-with mx-auto">
        <CBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: "product",
              link: `/${base}/product`,
            },
          ]}
        />
      </div> */}

      <div className="w-full 2xl:w-with mx-auto">
        <div className="mx-[100px]">
          {/* <Banner /> */}
          <Row className="md:mx-5 xl:mx-10 2xl:mx-0">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              {children}
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  );
};

export default CommonContent;
