import { useContext } from "react";
import { NavLink } from "react-router-dom";
import data from "../Data";
import { dataContext } from "../context/DataContext";

export default function Addons() {
  const { formInfo, setFormInfo, setStep, currStep } = useContext(dataContext);
  const { isMonthly } = formInfo;
  const { addons } = data;
  const handleChange = e => {
    const isChecked = formInfo.addons.some(
      item => item.name === e.target.value
    );
    if (isChecked) {
      const newAddons = formInfo.addons.filter(
        item => item.name !== e.target.value
      );
      setFormInfo(prev => ({ ...prev, addons: newAddons }));
    } else {
      const currAddOn = addons.filter(item => item.name === e.target.value)[0];
      const currPrice = isMonthly
        ? currAddOn.monthlyPrice
        : currAddOn.yearlyPrice;
      setFormInfo(prev => ({
        ...prev,
        addons: [...prev.addons, { name: e.target.value, price: currPrice }],
      }));
    }
    setStep(4);
  };
  const goBack = () => {
    setStep(currStep - 1);
  };
  console.log("addons", formInfo);
  return (
    <div className="addons">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <form method="post">
        {addons.map(item => {
          return (
            <label className="form-control" htmlFor={item.name} key={item.name}>
              <input
                type="checkbox"
                name={item.id}
                id={item.id}
                value={item.name}
                checked={formInfo.addons?.some(
                  addone => addone.name === item.name
                )}
                onChange={e => handleChange(e)}
              />
              <div className="flex-container">
                <p>
                  {item.name}
                  <span>{item.description}</span>
                </p>
                {isMonthly ? (
                  <p className="rate">+${item.monthlyPrice}/mo</p>
                ) : (
                  <p className="rate">+${item.yearlyPrice}/yr</p>
                )}
              </div>
            </label>
          );
        })}

        <button>Next Step</button>
      </form>
      <NavLink to="#" onClick={() => goBack()}>
        Go Back
      </NavLink>
    </div>
  );
}
