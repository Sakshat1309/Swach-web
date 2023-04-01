import Styles from "../styles/Home.module.scss";
import { Form, Image, Input, Row, Upload, Button, message } from "antd";
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { useRouter } from "next/router";
import { UploadOutlined } from "@ant-design/icons";
import Link from "next/link";
export default function Login() {
  // const dispatch = useDispatch();
  const router = useRouter();

  const onLoginSubmit = async (values) => {
    console.log(values);
    if(values.username === "admin" && values.password === "admin"){
      router.push("/nodal-center");
    }
    else if(values.username === "superadmin" && values.password === "superadmin"){
      router.push("/superadmin");
    }
    else{
      message.error("Invalid credentials");
    }
  }
  return (
    <>
            <div>
      <div className={Styles.main_signup1}>
        <div className={Styles.one}>
          <Image src="Login_image.png" alt="Sign-up img" preview={false} />
        </div>
        <div className={Styles.two}>
          <div className={Styles.signupForm}>
            <div className={Styles.subTitle}>ADMIN LOGIN</div>
            <div className={Styles.title}>Welcome !</div>
            <Form layout="vertical" onFinish={onLoginSubmit} >
              <Row>
                <Form.Item
                  name="username"
                  label="Username"
                  style={{ marginRight: "1rem", width: "100%" }}
                >
                  <Input size="large" placeholder="Username"></Input>
                </Form.Item>
              </Row>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                style={{ width: "97%" }}
              >
                <Input.Password size="large" />
              </Form.Item>

              <Button htmlType="submit" className={Styles.register}>
                Login
              </Button>
              <div className={Styles.regLink}>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}