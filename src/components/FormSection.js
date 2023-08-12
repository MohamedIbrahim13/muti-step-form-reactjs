import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import PersonalInfo from "./PersonalInfo";
import Plans from "./Plans";
import Addons from "./Addons";
import Finishup from "./Finishup";
import Thanks from "./Thanks";

export default function FormSection() {
  const { currStep, isConfirmed } = useContext(dataContext);
  const currForm = () => {
    switch (currStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <Plans />;
      case 3:
        return <Addons />;
      case 4:
        return <Finishup />;

      default:
        return <PersonalInfo />;
    }
  };

  return (
    <>
      {!isConfirmed && currForm()}
      {isConfirmed && <Thanks />}
    </>
  );
}
