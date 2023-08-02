import DashboardLayout from "@/components/AdminDashboardLayout";
import MapChart from "@/components/MapChart";
import { Space, Table, Tag, Modal, Select } from "antd";
import React from "react";
import Styles from "@/styles/pages/Dashboard.module.scss";
import { data } from "@/utils/data.js";

import { getBlockedList } from "@/services/blocking.service";
import { useQuery } from "react-query";

console.log(data.Node1);

const dataSet = data;

export default function Blocking() {
  const [node, setNode] = React.useState("Node1");
  const finalDataset = dataSet[node].appeals;

  const columns = [
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Description",
      key: "desc",
      dataIndex: "desc",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>View More</a>
        </Space>
      ),
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <Space size="middle">
          <Tag color={record.status == "Wrongly Blocked" ? "red" : "orange"}>
            {record.status == "Wrongly Blocked"
              ? "Wrongly Blocked"
              : "Complaint Resolved"}
          </Tag>
        </Space>
      ),
    },
  ];

  return (
    <DashboardLayout title="Appeals">
      <div
        style={{
          padding: "0 2rem",
        }}
      >
        <Select
          defaultValue="Node1"
          style={{ width: 120 }}
          onChange={(value) => {
            setNode(value);
          }}
        >
          <Select.Option value="Node1">Node1</Select.Option>
          <Select.Option value="Node2">Node2</Select.Option>
          <Select.Option value="Node3">Node3</Select.Option>
        </Select>
        <Table columns={columns} dataSource={finalDataset} />
      </div>
    </DashboardLayout>
  );
}
