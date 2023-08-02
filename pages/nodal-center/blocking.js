import DashboardLayout from "@/components/DashboardLayout";
import MapChart from "@/components/MapChart";
import { Space, Table, Tag, Modal, message } from "antd";
import React from "react";
import Styles from "@/styles/pages/Dashboard.module.scss";
import { data } from "@/utils/data.js";

import { getBlockedList } from "@/services/blocking.service";
import { useQuery } from "react-query";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;

console.log(data.Node1);

const dataSet = data.Node1.blocked;

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
        <Table columns={columns} dataSource={dataSet} />
      </div>
    </DashboardLayout>
  );
}
