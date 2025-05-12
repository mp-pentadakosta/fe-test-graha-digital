import { Card, CardHeader, Divider } from "@heroui/react";
import {CardBody, CardFooter} from "@heroui/card";
import { Chip } from "@heroui/chip";

export const CardComponent = (data: {
  title: string;
  description: string;
  status: boolean;
  groupName: string;
}) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Chip color={data.status ? "success" : "warning"}>
          {data.status ? "Done" : "In Progress"}
        </Chip>
        <div className="flex flex-col">
          <p className="text-md">{data.title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{data.description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <p className="text-sm text-gray-500">{data.groupName}</p>
      </CardFooter>
    </Card>
  );
};
