import { Handshake, PackageOpen, Truck, Container } from "lucide-react";
import PropTypes from "prop-types";
import { Card } from "@tremor/react";

// placeholder data
const cardObj = [
  {
    title: "Receive",
    value: "1,200",
    Icon: Handshake,
  },
  {
    title: "Packing",
    value: "12,879",
    Icon: PackageOpen,
  },
  {
    title: "Shipping",
    value: "6,005",
    Icon: Container,
  },
  {
    title: "Delivery",
    value: "120",
    Icon: Truck,
  },
];

const DashboardTransactions = () => {
  return (
    <div className="mb-14">
      <h1 className="font-semibold text-xl mb-2">Transactions</h1>
      <div className="flex gap-3">
        {cardObj.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const CardItem = ({ title, value, Icon }) => {
  return (
    <Card className="p-5">
      <span className="flex items-center gap-3 mb-3">
        <Icon className="h-4 w-4 text-tremor-content" />
        <h3 className="text-tremor-content">{title}</h3>
      </span>
      <div>
        <h1 className="text-4xl font-medium">{value}</h1>
      </div>
    </Card>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  Icon: PropTypes.elementType,
};

export default DashboardTransactions;
