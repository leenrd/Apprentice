import { Tracker, Card } from "@tremor/react";

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
    <div className="flex-1 min-h-fit h-full">
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
        <div className="mb-14">
          <p className="text-tremor-default flex items-center justify-between">
            {" "}
            <span className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              Warehouse 3
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

export default WarehouseOverview;
