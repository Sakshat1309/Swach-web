import DashboardLayout from "@/components/AdminDashboardLayout";
import MapChart from "@/components/MapChart";
import React from "react";

export default function Country() {
  return (
    <DashboardLayout title="Country Overview">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: "2rem",
        }}
      >
        <MapChart style={{ position: "relative" }} />
      </div>
    </DashboardLayout>
  );
}
