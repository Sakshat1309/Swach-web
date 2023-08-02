import DashboardLayout from "@/components/AdminDashboardLayout";
import MapChart from "@/components/MapChart";
import { Space, Table, Tag, Modal, message, Select } from "antd";
import React, { useEffect } from "react";
import Styles from "@/styles/pages/Dashboard.module.scss";
import { data } from "@/utils/data.js";

import { getBlockedList } from "@/services/blocking.service";
import { useQuery } from "react-query";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;

console.log(data.Node1);

const dataSet = data;

const showDeleteConfirm = (data) => {
  confirm({
    title: "Are you sure delete this task?",
    icon: <ExclamationCircleFilled />,
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      message.success("URL Blocked Successfully");
      // access this record on finalDataset and change status to blocked
      data.status = "blocked";
      console.log(data);
    },
    onCancel() {},
  });
};

const showUnblockConfirm = (data) => {
  confirm({
    title: "Are you sure unblock this task?",
    icon: <ExclamationCircleFilled />,
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      message.success("URL Unblocked Successfully");
      data.status = "active";
    },
    onCancel() {},
  });
};

export default function Blocking() {
  const [node, setNode] = React.useState("Node1");

  const finalDataSource = dataSet[node].blocked;

  console.log(dataSet);

  const columns = [
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Safety Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Number of Reports",
      key: "reports",
      dataIndex: "reports",
      sorter: (a, b) => a.reports - b.reports,
    },
    {
      title: "Last Updated",
      key: "last",
      dataIndex: "last",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {record.status === "active" ? (
            <a onClick={() => showDeleteConfirm(record)}>Block</a>
          ) : (
            <a onClick={() => showUnblockConfirm(record)}>Unblock</a>
          )}
        </Space>
      ),
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <Space size="middle">
          <Tag color={record.status === "active" ? "green" : "red"}>
            {record.status === "active" ? "Active" : "Blocked"}
          </Tag>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <DashboardLayout title="Blocking History">
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
        <Table columns={columns} dataSource={finalDataSource} />
      </div>
    </DashboardLayout>
  );
}
