import { Button, Input, Tooltip } from "@/components/common";
import { Table } from "@/components/common/table";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/common/table/components";
import { cn } from "@/utils/lib/utils";
import { TABLE_HEADERS, USERS } from "./mock/sections";
import { Link, useNavigate } from "react-router-dom";

export const GroupsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="m-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold"> Groups </h2>
        <div className="flex item-center gap-3">
          <Input className="w-[192px]" type="text" placeholder="Group name" />
          <Link to="/groups/create">
            <Button
              className="px-2.5 py-0 mt-2"
              title="Create a group"
              side={"bottom"}
            >
              <i className="text-3xl icn icn-group_add" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-[50px] overflow-hidden">
        <Table className="min-w-max">
          <TableHeader>
            <TableRow>
              {TABLE_HEADERS?.map((col, index) => (
                <TableHead
                  key={index}
                  className={cn("text-center font-bold", {
                    "text-left": index === 1 || index === 0,
                  })}
                >
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="w-full overflow-x-auto">
            {USERS.map((item, idx) => (
              <TableRow
                className="w-full"
                onClick={() => navigate(`${item.id}/edit`)}
                key={idx}
              >
                <TableCell className="text-left w-[260px]">
                  <div className="flex relative">
                    <div>
                      <div className="font-bold">{item.groupName.team}</div>
                      <div>{item.groupName.office}</div>
                    </div>

                    {item.groupName.icon && (
                      <Tooltip
                        icon={
                          <i
                            className={`text-xl absolute top-1 right-2 ${item.groupName.icon}`}
                          />
                        }
                        defaultStyleOn={false}
                        title="Individual registration available: 02/15/2024 12:00 AM   —  02/20/2024 12:00 AM"
                        side={"top"}
                        className=" mt-2 text-2xl bg-[#fcfcfc]"
                      />
                    )}
                  </div>
                </TableCell>

                <TableCell className="text-left flex gap-2 w-[238px]">
                  <p className="font-bold">{item.manager.user}</p>
                  {item.manager.count && (
                    <p className="border w-6 text-xs font-bold bg-[#ebebeb] h-6 flex justify-center items-center rounded-full">
                      + {item.manager.count}
                    </p>
                  )}
                </TableCell>
                <TableCell className="w-[238px]"></TableCell>
                <TableCell className="w-[79px]">{item.students}</TableCell>
                <TableCell className="text-center w-[83px]">
                  {item.programs}
                </TableCell>
                <TableCell className="text-center w-[74px]">
                  {item.courses}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
