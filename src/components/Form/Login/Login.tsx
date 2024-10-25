import { instagram, loginIcon, tweeter, youtube } from "@/constants/image";
import { Col, Input, Row } from "antd";
import Image from "next/image";

const Login = () => {
  return (
    <div>
      <Row>
        <Col xs={12} className="pr-10 pt-10">
          <div className="ml-[100px]">
            <h4 className="text-3xl font-bold text-blue">Logo</h4>
            <h2 className="text-4xl font-bold text-black mt-[170px]">
              Welcome to Influencer Impact
            </h2>
            <ul>
              <li className="text-2xl font-normal text-black mt-[100px]">
                Please enter your phone number
              </li>
              <li className="mt-6 w-96">
                <Input name="number" placeholder="xxx xxx xxx" type="number" />
              </li>
            </ul>
            <div className="w-96">
              <div className="flex items-center justify-center">
                <div>
                  <div className="flex items-center space-x-3 mt-10">
                    <div className="border-b-2 border-[#929292] w-32"></div>
                    <div className="text-xl">or</div>
                    <div className="border-b-2 border-[#929292] w-32"></div>
                  </div>
                  <ul className="text-center">
                    <li className="text-xl font-medium">Connect with</li>
                    <li className="mt-3 flex justify-center">
                      <ul className="flex space-x-4">
                        <li>
                          <Image
                            src={instagram}
                            alt="tweeter"
                            width={30}
                            height={30}
                          />
                        </li>
                        <li>
                          <Image
                            src={youtube}
                            alt="tweeter"
                            width={30}
                            height={30}
                          />
                        </li>
                        <li>
                          <Image
                            src={tweeter}
                            alt="tweeter"
                            width={30}
                            height={30}
                          />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          id="login-style"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Image
              src={loginIcon}
              alt="login"
              width={300}
              height={641}
              priority
              className="mx-auto"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
