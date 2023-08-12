import { createContext, useState } from "react";

const dataContext = createContext();

function ContextProvider({ children }) {
  const [currStep, setStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    phone: "",
    plan: {
      planName: "Arcade",
      planPrice: 9,
    },
    addons: [],
    isMonthly: true,
  });

  return (
    <dataContext.Provider
      value={{
        currStep,
        setStep,
        isConfirmed,
        setIsConfirmed,
        formInfo,
        setFormInfo,
      }}
    >
      {children}
    </dataContext.Provider>
  );
}

export { ContextProvider, dataContext };
