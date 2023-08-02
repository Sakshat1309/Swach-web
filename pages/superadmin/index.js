import DashboardLayout from "@/components/AdminDashboardLayout";
import { Card } from "antd";
import React from "react";
import Styles from "@/styles/pages/Dashboard.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import MapChart from "@/components/MapChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

export const options1 = {
  responsive: true,
  // hide axis labels
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  // make the border of the chart transparent
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 1,
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export const options = {
  indexAxis: "y",
  // add more spacing between the bars
  barThickness: 100,
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        stepSize: 10,
      },
    },
  },

  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  "Uttar Pradesh",
  "New Delhi",
  "Haryana",
  "Karnataka",
  "Madhya Pradesh",
  "Maharashtra",
  "Tamil Nadu",
];

export const data1 = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [10, 5, 15, 18, 20, 29, 36],
      borderColor: "rgb(53, 162, 235)",
      // add a gradient background which is transparent at the bottom
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx } = chart;
        const gradient = ctx.createLinearGradient(0, 0, 0, 450);
        // give an orange color to the top of the chart
        gradient.addColorStop(0, "rgba(53, 162, 235, 0.1)");
        // give a blue color to the bottom of the chart
        gradient.addColorStop(1, "rgba(53, 162, 235, 0)");
        return gradient;
      },
    },
  ],
};

export const data2 = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [1, 2.4, 3.5, 4.6, 5.7, 6.8, 7.9],
      // add a violet color to the border
      borderColor: "#8E44AD",
      // add a violet color to the background with opacity
      backgroundColor: "rgba(142, 68, 173, 0.1)",
    },
  ],
};

export const data3 = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [10, 5, 15, 18, 20, 29, 36],
      // add orange color to the border
      borderColor: "#FFA500",
      // add orange color to the background with opacity
      backgroundColor: "rgba(255, 165, 0, 0.1)",
    },
  ],
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      // add
      // add some data in strictly desc order
      data: [36, 29, 20, 18, 15, 10, 5],
      // add alternate background color to the bars based on index
      backgroundColor: (context) =>
        context.dataIndex % 2 === 0 ? "#4276F6" : "#BABFE0",
      borderColor: "transparent",
      // add padding to the top of the bar
      barThickness: 30,
      // add border radius to the bar
      borderRadius: 4,
      // add margin to the top of the bar
      barPercentage: 0.5,
    },
  ],
};

export default function NodalCenter() {
  const [moreDetails, setMoreDetails] = React.useState(false);

  return (
    <DashboardLayout title="Dashboard">
      <div className={Styles.container}>
        <Card
          title="Overall Obscenity Detected"
          extra={
            <a
              href="/superadmin/country-overview"
              onClick={() => setMoreDetails(!moreDetails)}
            >
              See Details
            </a>
          }
          style={{
            width: 700,
          }}
        >
          <Bar
            options={options}
            data={data}
            style={{
              height: "100%",
            }}
          />
        </Card>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            marginLeft: "2rem",
          }}
        >
          <Card
            size="small"
            className={Styles.card}
            style={{
              width: 300,
            }}
          >
            <div className={Styles.cardLeft}>
              <h3>Blocked IP&apos;s</h3>
              <span>1253</span>
              <p>30% of all site IPs </p>
            </div>
            <div className={Styles.cardRight}>
              <Line options={options1} data={data1} />
            </div>
          </Card>
          <Card
            size="small"
            className={Styles.card}
            style={{
              width: 300,
            }}
          >
            <div className={Styles.cardLeft}>
              <h3>Safety Index</h3>
              <span>3.8</span>
              <p>Increased by 2%</p>
            </div>
            <div className={Styles.cardRight}>
              <Line options={options1} data={data3} />
            </div>
          </Card>
          <Card
            size="small"
            className={Styles.card}
            style={{
              width: 300,
            }}
          >
            <div className={Styles.cardLeft}>
              <h3>Blocked IP&apos;s</h3>
              <span>1253</span>
              <p>30% of all site IPs </p>
            </div>
            <div className={Styles.cardRight}>
              <Line options={options1} data={data2} />
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
