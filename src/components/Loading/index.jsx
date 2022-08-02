import { ClockCircleOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

const antIcon = (
  <ClockCircleOutlined
    style={{
      fontSize: 50,
    }}
    spin
  />
);

const Loading = () => <Spin indicator={antIcon} />;

export default Loading;
