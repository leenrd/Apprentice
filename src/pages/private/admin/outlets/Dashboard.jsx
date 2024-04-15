import OutletWidthShell from "@/components/ui/shared/OutletWidthShell";
import OutletHeader from "@/components/ui/shared/OutletHeader";
import DashboardTransactions from "@/features/admin/RealTimeTransactions";
import { useState } from "react";
import {
  Card,
  DonutChart,
  Legend,
  Tracker,
  List,
  ListItem,
  Divider,
} from "@tremor/react";
import OutletFooter from "@/components/ui/shared/OutletFooter";

const Dashboard = () => {
  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <OutletHeader
        title={"Inventory Management"}
        subText={"Manage inventory and generate updates."}
      />
      <OutletWidthShell>
        <DashboardTransactions />
        <div className="flex gap-3 items-start w-full mb-48">
          <WarehouseOverview />
          <TotalResources />
          <RecentActivity />
        </div>
      </OutletWidthShell>
      <OutletFooter />
    </article>
  );
};

// activities to be destructured to separate components

const RecentActivity = () => {
  return (
    <div className="flex-1">
      <h1 className="font-bold text-md md:text-lg lg:text-xl mb-2">
        Recent Activity
      </h1>
      <Card className="p-5">
        <div className="flex justify-between items-center">
          <h1>Latest </h1>
          <p className="text-tremor-content-emphasis">Writes and Queries </p>
        </div>
        <Divider className="my-3"></Divider>
        <List>
          <ListItem>
            <div className="w-4 h-4 bg-tremor-brand rounded-full"></div>
            <span>Roger Federer</span> <span>Write</span>
          </ListItem>
          <ListItem>
            <div className="w-4 h-4 bg-tremor-brand rounded-full"></div>
            <span>Rafel Nadal</span> <span>Write</span>
          </ListItem>
          <ListItem>
            <div className="w-4 h-4 bg-tremor-brand rounded-full"></div>
            <span>Novak Djokovic</span> <span>Delete</span>
          </ListItem>
          <ListItem>
            <div className="w-4 h-4 bg-tremor-brand rounded-full"></div>
            <span>Andy Murray</span> <span>Update</span>
          </ListItem>
          <ListItem>
            <div className="w-4 h-4 bg-tremor-brand rounded-full"></div>
            <span>Andy Murray</span> <span>Update</span>
          </ListItem>
          <ListItem>
            <div className="w-4 h-4 bg-tremor-brand rounded-full"></div>
            <span>Andy Murray</span> <span>Update</span>
          </ListItem>
          <ListItem>
            <div className="w-4 h-4 bg-tremor-brand rounded-full"></div>
            <span>Andy Murray</span> <span>Update</span>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

const WarehouseOverview = () => {
  const data = [
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "zinc", tooltip: "Downtime" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "yellow", tooltip: "Maintenance" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "orange", tooltip: "Operational" },
    { color: "red", tooltip: "Degraded" },
    { color: "orange", tooltip: "Operational" },
  ];
  return (
    <div className="flex-1">
      <h1 className="font-bold text-md md:text-lg lg:text-xl mb-2">
        Warehouses&apos; Overview
      </h1>
      <Card className="p-5">
        <div className="mb-6">
          <p className="text-tremor-default flex items-center justify-between">
            {" "}
            <span className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              Warehouse 1
            </span>{" "}
            <span className="text-tremor-content dark:text-dark-tremor-content">
              Availability
            </span>{" "}
          </p>
          <Tracker data={data} className="mt-2" />
        </div>
        <div className="mb-6">
          <p className="text-tremor-default flex items-center justify-between">
            {" "}
            <span className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              Warehouse 1
            </span>{" "}
            <span className="text-tremor-content dark:text-dark-tremor-content">
              Availability
            </span>{" "}
          </p>
          <Tracker data={data} className="mt-2" />
        </div>
        <div className="mb-6">
          <p className="text-tremor-default flex items-center justify-between">
            {" "}
            <span className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              Warehouse 1
            </span>{" "}
            <span className="text-tremor-content dark:text-dark-tremor-content">
              Availability
            </span>{" "}
          </p>
          <Tracker data={data} className="mt-2" />
        </div>
      </Card>
    </div>
  );
};

const TotalResources = () => {
  const [value, setValue] = useState("");
  const sales = [
    { name: "Warehouse 1", sales: 980 },
    { name: "Warehouse 1", sales: 456 },
    { name: "Warehouse 1", sales: 390 },
    { name: "Warehouse 1", sales: 240 },
    { name: "Warehouse 1", sales: 190 },
    { name: "Warehouse 1", sales: 139 },
  ];
  return (
    <div className="flex-1">
      <h1 className="font-bold text-md md:text-lg lg:text-xl mb-2">
        Total Resources
      </h1>
      <Card className="py-9 px-5">
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          colors={[
            "orange-900",
            "orange-800",
            "orange-700",
            "orange-600",
            "orange-500",
            "orange-400",
          ]}
        />
        <div className="mt-12">
          <Legend
            className="mt-3 mx-auto  ml-5"
            categories={[
              "Warehouse 1",
              "Warehouse 2",
              "Warehouse 3",
              "Warehouse 4",
              "Warehouse 5",
              "Warehouse 6",
            ]}
            colors={[
              "orange-900",
              "orange-800",
              "orange-700",
              "orange-600",
              "orange-500",
              "orange-400",
            ]}
            onClickLegendItem={(e) => {
              value === e ? setValue("") : setValue(e);
            }}
            activeLegend={value}
          />
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
