import { Card, Divider, List, ListItem } from "@tremor/react";

const RecentActivity = () => {
  const today = new Date();
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString(undefined, dateOptions);

  // TODO: Implement the RecentActivity feature from server logs
  return (
    <div className="mb-20">
      <h1 className="font-bold text-md md:text-lg lg:text-xl mb-2">
        Recent Activity
      </h1>
      <Card className="p-5">
        <div className="flex justify-between items-center font-semibold">
          <h1 className="text-tremor-content-emphasis">Latest </h1>
          <p className="text-tremor-content-emphasis ">
            Today: {formattedDate}
          </p>
        </div>
        <Divider className="my-3"></Divider>
        <List>
          <ListItem>
            <div className="flex gap-4 items-center">
              <div className="w-1 h-5 bg-tremor-brand rounded-full"></div>
              <span>
                Roger Federer added a new item: Plushie younox xxx in warehouse
                4
              </span>
            </div>
            <span>{formattedDate}</span>
          </ListItem>

          <ListItem>
            <div className="flex gap-4 items-center">
              <div className="w-1 h-5 bg-tremor-brand rounded-full"></div>
              <span>
                Roger Federer added a new item: Plushie younox xxx in warehouse
                4
              </span>
            </div>
            <span>{formattedDate}</span>
          </ListItem>

          <ListItem>
            <div className="flex gap-4 items-center">
              <div className="w-1 h-5 bg-tremor-brand rounded-full"></div>
              <span>
                Roger Federer added a new item: Plushie younox xxx in warehouse
                4
              </span>
            </div>
            <span>{formattedDate}</span>
          </ListItem>

          <ListItem>
            <div className="flex gap-4 items-center">
              <div className="w-1 h-5 bg-tremor-brand rounded-full"></div>
              <span>
                Roger Federer added a new item: Plushie younox xxx in warehouse
                4
              </span>
            </div>
            <span>{formattedDate}</span>
          </ListItem>

          <ListItem>
            <div className="flex gap-4 items-center">
              <div className="w-1 h-5 bg-tremor-brand rounded-full"></div>
              <span>
                Roger Federer added a new item: Plushie younox xxx in warehouse
                4
              </span>
            </div>
            <span>{formattedDate}</span>
          </ListItem>

          <ListItem>
            <div className="flex gap-4 items-center">
              <div className="w-1 h-5 bg-tremor-brand rounded-full"></div>
              <span>
                Roger Federer added a new item: Plushie younox xxx in warehouse
                4
              </span>
            </div>
            <span>{formattedDate}</span>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default RecentActivity;
