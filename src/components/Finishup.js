import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dataContext } from "../context/DataContext";

export default function Finishup() {
  const {
    formInfo,

    setStep,

    isConfirmed,
    setIsConfirmed,
    currStep,
  } = useContext(dataContext);
  const billingType = formInfo.isMonthly ? "/mo" : "/yr";
  let totalCost = formInfo.plan.planPrice;
  for (const item of formInfo.addons) {
    totalCost += item.price;
  }
  const goBack = () => {
    setStep(currStep - 1);
  };
  const goBackToPlan = () => {
    setStep(currStep - 2);
  };
  console.log("finish", formInfo);
  return (
    <div className="finishup">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="summary">
        <div className="flex-container">
          <p>
            <strong>
              {formInfo.plan.planName} ({formInfo.isMonthly ? "Month" : "Year"})
            </strong>
            <span>
              <NavLink to="#" onClick={() => goBackToPlan()}>
                Change
              </NavLink>
            </span>
          </p>
          <p>
            <strong>
              +${formInfo.plan.planPrice}
              {billingType}
            </strong>
          </p>
        </div>
        <hr />
        {formInfo.addons.map(item => {
          return (
            <div className="flex-container" key={item.name}>
              <p>{item.name}</p>
              <p>
                +${item.price}
                {billingType}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex-container">
        <p>Total ({formInfo.isMonthly ? "per month" : "per Year"})</p>
        <p>
          <strong>
            ${totalCost}
            {billingType}
          </strong>
        </p>
      </div>
      <button type="submit" onClick={() => setIsConfirmed(!isConfirmed)}>
        Confirm
      </button>
      <NavLink to="#" onClick={() => goBack()}>
        Go Back
      </NavLink>
    </div>
  );
}
