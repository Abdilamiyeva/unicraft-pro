import { Button, Swap, Tabs } from "@/components/common";
import { useMemo, useState } from "react";
import { BaseGroupForm } from "../components/base-group-form";
import { AVAILABLE_DATA } from "../mock/sections";
import { Programs } from "./components/programs/programs";
import { Courses } from "./components/courses";

export const EditGroup = () => {
  const [activeTab, setActiveTab] = useState("description");

  const groupEditTabs = useMemo(
    () => [
      {
        id: "description",
        label: "DESCRIPTION",
        children: <BaseGroupForm />,
      },
      {
        id: "managers",
        label: "MANAGERS",
        children: (
          <div className="mt-7">
            <Swap
              availableData={AVAILABLE_DATA}
              onAssignedChange={(users) => console.warn(users)}
              isWithButtons
            />
          </div>
        ),
      },
      {
        id: "trainers",
        label: "TRAINERS",
        children: (
          <div className="mt-7">
            <Swap
              availableData={AVAILABLE_DATA}
              onAssignedChange={(users) => console.warn(users)}
              isWithButtons
            />
          </div>
        ),
      },
      { id: "programs", label: "PROGRAMS", children: <Programs /> },
      { id: "courses", label: "COURSES", children: <Courses /> },
      { id: "students", label: "STUDENTS", children: <div> Tab-5</div> },
    ],
    []
  );
  return (
    <div>
      <div className="mx-7 mt-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl mb-3 font-semibold font-open-sans leading-4">
              Edit group
            </h2>
            <p className="text-base font-normal text-[#8c8c8c] font-open-sans leading-6">
              frontend team
            </p>
          </div>
          <div className="flex gap-10">
            <div className="flex justify-between gap-4 items-center">
              <div>
                <span className="text-xl">1</span>
                <p className="text-[10px] font-normal">MANAGERS</p>
              </div>
              <div>
                <span className="text-xl">0</span>
                <p className="text-[10px] font-normal">TRAINERS</p>
              </div>
              <div>
                <span className="text-xl">4</span>
                <p className="text-[10px] font-normal">PROGRAMS</p>
              </div>
              <div>
                <span className="text-xl">0</span>
                <p className="text-[10px] font-normal">COURSES</p>
              </div>
              <div>
                <span className="text-xl">0</span>
                <p className="text-[10px] font-normal">STUDENTS</p>
              </div>
            </div>
            <Button className="mb-10">COMPLETE</Button>
          </div>
        </div>
        <div>
          <Tabs
            value={activeTab}
            defaultValue="description"
            onChange={(prev) => setActiveTab(prev)}
            tabs={groupEditTabs}
          />
        </div>
      </div>
    </div>
  );
};
