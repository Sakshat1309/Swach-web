import DashboardLayout from "@/components/DashboardLayout";
import MapChart from "@/components/MapChart";
import { Space, Table, Tag, Modal } from "antd";
import React from "react";
import Styles from "@/styles/pages/Dashboard.module.scss";
import { data } from "@/utils/data.js";

import { getBlockedList } from "@/services/blocking.service";
import { useQuery } from "react-query";

console.log(data.Node1);

const dataSet = data.Node1.appeals;

export default function Blocking() {
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
        {console.log(data.Node1)}
        <Table columns={columns} dataSource={dataSet} />
      </div>
    </DashboardLayout>
  );
}
