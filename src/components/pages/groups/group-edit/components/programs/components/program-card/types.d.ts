
export interface ProgramCourseProps{
    name:string
    id: number;
    text: string;
}
export interface ProgramCardProps {
  course: ProgramCourseProps;
  onMoveRight: (id: number) => void;
  buttonTheme:
    | "primary"
    | "success"
    | "default"
    | "danger"
    | "warning"
    | undefined;
  buttonContent: ReactElement;
}
