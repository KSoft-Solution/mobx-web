import React, { useEffect } from "react";
import { Button, Form, Input, message, Upload, Row, Col } from "antd";
import { connect } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import _ from "lodash";
import { toast } from "react-toastify";
import "animate.css";

import actions from "../../redux/action";
import "./signup.scss";
import { Loading } from "../../components";

const FORM_LAYOUT = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 6 },
    xl: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 18 },
    xl: { span: 18 },
  },
};

const Signup = ({ signUp, signup, signupChange }) => {
  const { formErrors, isLoading, isSubmitting, signupFormData } = signup;

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    return signUp();
  };

  useEffect(() => {
    if (!_.isEmpty(formErrors["name"])) {
      toast.error(formErrors["name"][0]);
    }
    if (!_.isEmpty(formErrors["email"])) {
      toast.error(formErrors["email"][0]);
    }
    if (!_.isEmpty(formErrors["password"])) {
      toast.error(formErrors["password"][0]);
    }
    if (!_.isEmpty(formErrors["avatar"])) {
      toast.error(formErrors["avatar"][0]);
    }
  }, [formErrors]);

  return (
    <Form
      form={form}
      name="registerform"
      autoComplete="off"
      {...FORM_LAYOUT}
      className="animated-box in"
      initialValues={signupFormData}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {isLoading ? <Loading /> : null}
      <Row gutter={24} justify="center">
        <Col span={24}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: `${formErrors["name"]}`,
              },
            ]}
          >
            <Input
              value={signupFormData?.name}
              onChange={(e) => {
                signupChange(e.target.name, e.target.value);
              }}
              name="name"
              className="animate__animated animate__bounce"
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: formErrors["email"],
              },
            ]}
          >
            <Input
              value={signupFormData?.email??''}
              onChange={(e) => {
                signupChange(e.target.name, e.target.value);
              }}
              name="email"
              className="animate__animated animate__bounce"
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              value={signupFormData?.password??''}
              onChange={(e) => {
                signupChange(e.target.name, e.target.value);
              }}
              name="password"
              className="animate__animated animate__bounce"
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Input
            type="file"
            name="avatar"
            onChange={(e) => {
              signupChange(e.target.name, e.target.files[0].name);
            }}
            // value={signupFormData?.avatar}
            className="animate__animated animate__bounce"
          />
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={(e) => handleSubmit(e)}
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(Signup);
