import { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";

export default function PersonalInfo() {
  const { formInfo, setFormInfo, setStep } = useContext(dataContext);
  const { name, email, phone } = formInfo;
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const handleSubmit = () => {
    setFormInfo(prev => ({ ...prev, ...user }));
    setStep(2);
  };
  //console.log(formInfo);
  return (
    <div className="info">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          placeholder="e.g. Stephen King"
          onChange={e => setUser({ ...user, name: e.target.value })}
          required
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          placeholder="e.g. stephenking@lorem.com"
          onChange={e => setUser({ ...user, email: e.target.value })}
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={user.phone}
          placeholder="e.g. +1 234 567 890"
          onChange={e => setUser({ ...user, phone: e.target.value })}
          required
        />

        <button type="submit">Next Step</button>
      </form>
    </div>
  );
}
