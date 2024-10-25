import { Col, Row } from "antd";

type IList = {
  id: number;
  title: string;
};

const list1 = [
  {
    id: 1,
    title: "Courses",
  },
  {
    id: 2,
    title: "Fitness & Gym",
  },
  {
    id: 3,
    title: "Fashion & Style",
  },
  {
    id: 4,
    title: "Beauty & Makeup",
  },
  {
    id: 5,
    title: "Home & Decor",
  },
  {
    id: 6,
    title: "Technology",
  },
  {
    id: 7,
    title: "Lifestyle",
  },
];

const list2 = [
  {
    id: 1,
    title: "Collabs",
  },
  {
    id: 2,
    title: "All",
  },
  {
    id: 3,
    title: "Instagram",
  },
  {
    id: 4,
    title: "Twitter",
  },
  {
    id: 5,
    title: "Youtube",
  },
  {
    id: 6,
    title: "Spend & Earn",
  },
];

const list3 = [
  {
    id: 1,
    title: "Campaigns",
  },
  {
    id: 2,
    title: "Ongoing Campaigns",
  },
  {
    id: 3,
    title: "Successfully Completed",
  },
];

const TopFooter = () => {
  return (
    <div className="mx-[100px] mt-16 pt-12">
      <Row>
        <Col
          xs={24}
          md={24}
          lg={8}
          xl={8}
          className="border-r-2 border-gray-600"
        >
          <div className="flex justify-center">
            <div>
              {list1.map((item: IList, i) => {
                return (
                  <ul key={i}>
                    <li className="text-xl font-sans font-medium">
                      {item?.title}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </Col>
        <Col
          xs={24}
          md={24}
          lg={8}
          xl={8}
          className="border-r-2 border-gray-600"
        >
          <div className="flex justify-center">
            <div>
              {list2.map((item: IList, i) => {
                return (
                  <ul key={i}>
                    <li className="text-xl font-sans font-medium">
                      {item?.title}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </Col>
        <Col xs={24} md={24} lg={8} xl={8}>
          <div className="flex justify-center">
            <div>
              {list3.map((item: IList, i) => {
                return (
                  <ul key={i}>
                    <li className="text-xl font-sans font-medium">
                      {item?.title}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
      <div className="border-b-2 border-gray-600 mt-9"></div>
    </div>
  );
};

export default TopFooter;
