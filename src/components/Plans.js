import { NavLink } from "react-router-dom";
import { useContext } from "react";
import data from "../Data";
import { dataContext } from "../context/DataContext";

export default function Plans() {
  const { formInfo, setFormInfo, setStep, currStep } = useContext(dataContext);
  const { isMonthly } = formInfo;

  const handleChange = e => {
    const currPlan = data.plans.filter(plan => plan.name === e.target.value);
    const currPrice = isMonthly
      ? currPlan[0].monthlyPrice
      : currPlan[0].yearlyPrice;
    setFormInfo(prev => ({
      ...prev,
      plan: {
        planName: e.target.value,
        planPrice: currPrice,
      },
    }));
  };
  const handleSubmit = () => {
    setStep(3);
  };

  const goBack = () => {
    setStep(currStep - 1);
  };

  const changeBilling = e => {
    e.preventDefault();
    const infoPlan = formInfo.plan.planName;
    const currPlan = data.plans.filter(plan => plan.name === infoPlan)[0];
    const currPrice = !isMonthly ? currPlan.monthlyPrice : currPlan.yearlyPrice;
    const infoAddon = formInfo.addons;
    let newAddons = [];
    if (infoAddon.length > 0) {
      for (const item of infoAddon) {
        const theAddOnInfo = data.addons.filter(
          info => info.name === item.name
        );
        newAddons.push({
          name: item.name,
          price: !isMonthly
            ? theAddOnInfo[0].monthlyPrice
            : theAddOnInfo[0].yearlyPrice,
        });
      }
    }

    setFormInfo(prev => ({
      ...prev,
      isMonthly: !prev.isMonthly,
      plan: {
        ...prev.plan,
        planPrice: currPrice,
      },
      addons: newAddons,
    }));
  };
  console.log(formInfo);
  return (
    <div className="plans">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-container">
          {data.plans.map(item => {
            return (
              <label htmlFor={item.name.toLowerCase()} key={item.name}>
                <input
                  type="radio"
                  name="plan"
                  id={item.name.toLowerCase()}
                  value={item.name}
                  onChange={e => handleChange(e)}
                  checked={item.name === formInfo.plan.planName}
                />
                <div className="values">
                  {item.name}
                  {isMonthly ? (
                    <p>${item.monthlyPrice}/mo</p>
                  ) : (
                    <p>${item.yearlyPrice}/yr</p>
                  )}
                  {!isMonthly && <p>2 months free</p>}
                </div>
              </label>
            );
          })}
        </div>

        <div>
          <p>Monthly</p>
          <label className="switch">
            <input
              type="checkbox"
              defaultChecked={!isMonthly}
              defaultValue={isMonthly ? "Montly" : "Yearly"}
              onClick={e => changeBilling(e)}
            />
            <span className="slider round"></span>
          </label>
          <p>Yearly</p>
        </div>
        <button type="submit">Next Step</button>
      </form>

      <NavLink to="#" onClick={() => goBack()}>
        Go Back
      </NavLink>
    </div>
  );
}
