import { useParams } from "react-router-dom";
import OutletFooter from "@/components/ui/shared/OutletFooter";
import OutletHeader from "@components/ui/shared/OutletHeader";
import OutletWidthShell from "@components/ui/shared/OutletWidthShell";
import {
  Badge,
  Card,
  CategoryBar,
  Divider,
  Legend,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import PropTypes from "prop-types";
import { RiRecordCircleFill } from "@remixicon/react";
import RecentActivity from "@/features/admin/RecentActivities";

const Warehouse = () => {
  const { id } = useParams();

  return (
    <article className="w-full flex flex-col min-h-screen justify-between">
      <div>
        <OutletHeader
          title={id ? `Warehouse ${id}` : "Warehouse"}
          subText={"Manage and monitor warehouse."}
        />
        <OutletWidthShell>
          <div className="flex gap-3  w-full mb-10">
            <TabGroup>
              <TabList className="mt-4 mb-10">
                <Tab>Overview</Tab>
                <Tab>Items</Tab>
                <Tab>Settings</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <TabPanelWarehouseOverview id={id} />
                  <RecentActivity />
                </TabPanel>
                <TabPanel>{/* table */}</TabPanel>
                <TabPanel>{/* table */}</TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </OutletWidthShell>
      </div>
      <OutletFooter />
    </article>
  );
};

export default Warehouse;

const TabPanelWarehouseOverview = ({ id }) => {
  return (
    <div className="grid grid-cols-3 gap-8 mb-10">
      <Card className="col-span-2">
        <div>
          <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Storage Capacity
          </h3>
          <p className="mt-1 text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            32,227
          </p>
        </div>
        <CategoryBar
          values={[40, 30, 20, 10]}
          colors={["orange", "zinc", "amber", "rose"]}
        />
        <Legend
          className="mt-10 mb-5"
          categories={["Received", "Packing", "Shipping", "Delivery"]}
          colors={["orange", "zinc", "amber", "rose"]}
        />
        <Divider />
        <div className="flex gap-4 items-center">
          <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Status:{" "}
          </h3>
          <Badge icon={RiRecordCircleFill} color="green">
            Fully Operational
          </Badge>
        </div>
      </Card>
      <Card>
        <div className="h-[250px] overflow-scroll no-scrollbar flex flex-col gap-6">
          <div>
            <h3>Warehouse Managers</h3>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {id}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center">
              SN
            </div>
            <h1>Staff Name</h1>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center">
              SN
            </div>
            <h1>Staff Name</h1>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center">
              SN
            </div>
            <h1>Staff Name</h1>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center">
              SN
            </div>
            <h1>Staff Name</h1>
          </div>
        </div>
      </Card>
    </div>
  );
};

TabPanelWarehouseOverview.propTypes = {
  id: PropTypes.string,
};
