import {
  useEffect,
  useState
} from "react";
import {
  Section
} from "./components/section";

export const Courses = () => {
  const [currentSection, setCurrentSection] = useState(undefined);

useEffect(() => {
  if (currentSection) {
    // Some logic with currentSection
  }
}, [currentSection]);

  return <Section setCurrentSection = {
    setCurrentSection
  }
  />;
};