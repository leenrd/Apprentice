import { Badge, Card, ProgressCircle } from "@tremor/react";
import { RiRecordCircleFill } from "@remixicon/react";

const WarehouseOverview = () => {
  const data = [
    {
      id: 1,
      name: "Warehouse 1",
      capacity: 12345,
      value: 75,
    },
    {
      id: 2,
      name: "Warehouse 2",
      capacity: 12345,
      value: 93,
    },
    {
      id: 3,
      name: "Warehouse 3",
      capacity: 12345,
      value: 32,
    },
    {
      id: 4,
      name: "Warehouse 4",
      capacity: 12345,
      value: 45,
    },
    {
      id: 5,
      name: "Warehouse 5",
      capacity: 12345,
      value: 75,
    },
  ];

  return (
    <div className="flex-1 min-h-fit h-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-md md:text-lg lg:text-xl mb-2">
          Warehouses&apos; Overview
        </h1>
        <Badge icon={RiRecordCircleFill} color="green">
          All {data.length} Operational
        </Badge>
      </div>
      <Card className="px-5 py-7 h-[353px] overflow-scroll no-scrollbar">
        {data.map((item) => {
          return (
            <Card key={item.id} className="mb-2">
              <div className="flex justify-start space-x-5 items-center">
                <ProgressCircle value={item.value} size="md">
                  <span className="text-xs font-medium text-slate-700">
                    {item.value}%
                  </span>
                </ProgressCircle>
                <div>
                  <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                    {item.name} (75%)
                  </p>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Capacity management control
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </Card>
    </div>
  );
};

export default WarehouseOverview;
