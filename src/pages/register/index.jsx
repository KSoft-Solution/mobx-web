import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import * as _ from "lodash";
import axios from "axios";
import "./index.scss";

const FORM_LAYOUT = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((formValues) => ({
      ...formValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const requiredFields = _.some(
      _.pick(formValues, ["name", "email", "password"]),
      _.isEmpty
    );
    if (requiredFields) {
      message.error("please fill all required fields");
    } else {
      axios
        .post("http://localhost:8000/api/v1/user/register", {
          name: formValues?.name,
          email: formValues?.email,
          password: formValues?.password,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }

    console.log(formValues);
    console.log(requiredFields, "r");
  };

  return (
    <Form
      form={form}
      name="registerform"
      initialValues={formValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      {...FORM_LAYOUT}
      className='registerWrapper'
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input
          onChange={(e) => handleChange(e)}
          name="name"
          value={formValues.name}
        />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          onChange={(e) => handleChange(e)}
          name="email"
          value={formValues.email}
        />
      </Form.Item>
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
          onChange={(e) => handleChange(e)}
          name="password"
          value={formValues.password}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 24,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
