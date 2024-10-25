import { Col, Row } from "antd";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

type IList = {
  id: number;
  title: string;
};

const list1 = [
  {
    id: 1,
    title: "About Us",
  },
  {
    id: 2,
    title: "Career",
  },
];

const list2 = [
  {
    id: 1,
    title: "Team Diary",
  },
  {
    id: 2,
    title: "Blog",
  },
  {
    id: 3,
    title: "Our Services",
  },
];

const list3 = [
  {
    id: 1,
    title: "Terms & Conditions",
  },
  {
    id: 2,
    title: "Privacy",
  },
];

const BottomFooter = () => {
  return (
    <div className="mx-[100px] mt-16">
      <Row>
        <Col xs={24} md={24} lg={6} xl={6}>
          <div className="flex justify-center">
            <div>
              {list1.map((item: IList, i) => {
                return (
                  <ul key={i}>
                    <li className="text-xl font-sans font-normal">
                      {item?.title}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </Col>
        <Col xs={24} md={24} lg={6} xl={6}>
          <div className="flex justify-center">
            <div>
              {list2.map((item: IList, i) => {
                return (
                  <ul key={i}>
                    <li className="text-xl font-sans font-normal">
                      {item?.title}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </Col>
        <Col xs={24} md={24} lg={6} xl={6}>
          <div className="flex justify-center">
            <div>
              {list3.map((item: IList, i) => {
                return (
                  <ul key={i}>
                    <li className="text-xl font-sans font-normal">
                      {item?.title}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </Col>

        <Col xs={24} md={24} lg={6} xl={6}>
          <div className="flex justify-center">
            <div>
              <ul>
                <li className="text-xl font-sans font-normal">Contact Us</li>
                <li className="text-xl font-sans font-normal mt-2">
                  <ul className="flex space-x-2">
                    <li>
                      <AiOutlineWhatsApp />
                    </li>
                    <li>
                      <AiOutlineInstagram />
                    </li>
                    <li>
                      <AiOutlineMail />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BottomFooter;
