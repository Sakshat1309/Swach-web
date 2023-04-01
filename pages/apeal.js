import React from 'react'
import Styles from '../styles/Apeal.module.scss'
import { Form, Image, Input, Row, Upload, Button, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;
function apeal() {

  return (
    <div>
    <div className={Styles.main_signup1}>
      <div className={Styles.one}>
        <Image src="ebook.webp" alt="Sign-up img" preview={false} />
      </div>
      <div className={Styles.two}>
        <div className={Styles.signupForm}>
          <div className={Styles.subTitle}>Appeal Form</div>
          <div className={Styles.title}>Fill in the details below</div>
          <Form layout="vertical">
            <Row>
              <Form.Item
                label="Website URL"
                style={{ marginRight: "1rem", width: "47%" }}
              >
                <Input size="large" placeholder="Website url"></Input>
              </Form.Item>

              <Form.Item label="CNAME" style={{ width: "47%" }}>
                <Input size="large" placeholder="CNAME"></Input>
              </Form.Item>
            </Row>
            <Row>
              <Form.Item
                label="Email"
                style={{ marginRight: "1rem", width: "100%" }}
              >
                <Input size="large" placeholder="Email Address"></Input>
              </Form.Item>
            </Row>
            <Row>
              <Form.Item
                label="Your Name"
                style={{ marginRight: "1rem", width: "100%" }}
              >
                <Input size="large" placeholder="Name"></Input>
              </Form.Item>
            </Row>
            <Row>
              <Form.Item
                label="Description"
                style={{ marginRight: "1rem", width: "100%", height: "200%" }}
              >
                <Input
                  showCount
                  maxLength={200}
                  size="large"
                  placeholder="Explain"
                ></Input>
              </Form.Item>
            </Row>
            <Row>
              <Form.Item
                label="Status"
                style={{ marginRight: "1rem", width: "47%" }}
              >
                <Select
                  placeholder="Select a option "
                  allowClear
                  size="large"
                  style={{ marginRight: "2rem", width: "100%" }}
                >
                  <Option value="L0">Complaint Error</Option>
                  <Option value="L1">Complaint Resolved</Option>
                </Select>
              </Form.Item>
            </Row>

            <Upload style={{ marginRight: "1rem", width: "100%" }}>
              <Button
                icon={<UploadOutlined />}
                style={{ width: "228%", marginTop: "27px" }}
              >
                Click to Upload Proof
              </Button>
            </Upload>

            <Button className={Styles.register} >Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default apeal