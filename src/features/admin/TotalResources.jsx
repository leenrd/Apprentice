import { Card, BarChart } from "@tremor/react";

const TotalResources = () => {
  const chartdata = [
    {
      name: "Amphibians",
      "Number of threatened species": 2488,
    },
    {
      name: "Birds",
      "Number of threatened species": 1445,
    },
    {
      name: "Crustaceans",
      "Number of threatened species": 743,
    },
    {
      name: "Ferns",
      "Number of threatened species": 281,
    },
    {
      name: "Arachnids",
      "Number of threatened species": 251,
    },
    {
      name: "Corals",
      "Number of threatened species": 232,
    },
    {
      name: "Algae",
      "Number of threatened species": 98,
    },
  ];

  const dataFormatter = (number) =>
    Intl.NumberFormat("us").format(number).toString();

  return (
    <>
      <div className="flex-1 min-h-fit">
        <h1 className="font-bold text-md md:text-lg lg:text-xl mb-2">
          Total Resources
        </h1>

        <Card className="py-4 px-6">
          <BarChart
            className="min-w-full"
            data={chartdata}
            index="name"
            categories={["Number of threatened species"]}
            colors={["orange"]}
            valueFormatter={dataFormatter}
            yAxisWidth={35}
          />
        </Card>
      </div>
    </>
  );
};

export default TotalResources;
