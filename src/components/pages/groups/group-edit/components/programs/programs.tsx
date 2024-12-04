import React from "react";
import { Search } from "@/components/common";
import { PROGRAMS_COURSES_DATA } from "../../../mock/sections";
import { BsPlusLg } from "react-icons/bs";
import { LuMinus } from "react-icons/lu";
import { useToast } from "@/components/ui/use-toast";
import { ProgramCourseProps } from "./components/program-card/types";
import { ProgramCard } from "./components/program-card";

export const Programs = () => {
  const [leftCourses, setLeftCourses] = React.useState<ProgramCourseProps[]>(
    PROGRAMS_COURSES_DATA
  );
  const [rightCourses, setRightCourses] = React.useState<ProgramCourseProps[]>(
    []
  );
  const { toast } = useToast();

  const handleMoveLeft = (courseId: number) => {
    const courseToMove = leftCourses.find((course) => course.id === courseId)!;
    setRightCourses((prevRightCourses) => [...prevRightCourses, courseToMove]);
    setLeftCourses(leftCourses.filter((course) => course.id !== courseId));
    toast({
      description: "Program has been added",
    });
  };

  const handleMoveRight = (courseId: number) => {
    const courseToMove = rightCourses.find((course) => course.id === courseId)!;
    setLeftCourses((prevLeftCourses) => [...prevLeftCourses, courseToMove]);
    setRightCourses(rightCourses.filter((course) => course.id !== courseId));
    toast({
      description: "Program has been removed",
      variant: "warning",
    });
  };

  return (
    <div className="flex gap-6">
      <div className="flex-1 pr-7 pb-5 h-[calc(100vh-180px)] overflow-y-auto border-r">
        <div className="mb-16 mt-5">
          <Search placeholder="Program name" />
        </div>
        {leftCourses.map((course) => (
          <ProgramCard
            buttonContent={<BsPlusLg className="text-xl"/>}
            buttonTheme="default"
            key={course.id}
            course={course}
            onMoveRight={handleMoveLeft}
          />
        ))}
      </div>
      <div className="flex-1 pr-7 h-[calc(100vh-180px)] overflow-y-auto">
        <div className="border border-yellow-500 px-7 text-sm py-8 rounded mb-10 mt-16 shadow-input-shadow-yellow">
          Programs that the manager can assign Programs.
        </div>

        {rightCourses.map((course) => (
          <ProgramCard
            buttonContent={<LuMinus className="text-xl" />}
            buttonTheme="danger"
            key={course.id}
            course={course}
            onMoveRight={handleMoveRight}
          />
        ))}
      </div>
    </div>
  );
};
