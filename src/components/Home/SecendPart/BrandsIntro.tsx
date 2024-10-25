import { Col, Row } from "antd";
import BrandsLogo from "./BrandsLogo";

const BrandsIntro = () => {
  return (
    <div className="mx-[100px]">
      <Row>
        <Col xs={24} md={24} lg={12}>
          <BrandsLogo />
        </Col>
        <Col
          xs={24}
          md={24}
          lg={12}
          className="pl-9"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="mx-2">
            <h5 className="text-5xl text-blue font-bold">
              We Work with Brands that Influence
            </h5>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BrandsIntro;
