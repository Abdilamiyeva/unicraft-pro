import { Button } from "@/components/common";
import { ProgramCardProps } from "./types";

export const ProgramCard = ({
  course,
  onMoveRight,
  buttonTheme,
  buttonContent,
}: ProgramCardProps) => (
  <div className="border flex justify-between items-center mb-3 rounded w-full py-16 px-10 h-[92px] transition-all hover:shadow-lg">
    <div>
      <p className="mb-3 font-bold text-lg leading-5">{course.name}</p>
      <p>{course.text}</p>
    </div>
    <Button
      theme={buttonTheme}
      size="sm"
      onClick={() => onMoveRight(course.id)}
    >
      {buttonContent}
    </Button>
  </div>
);
