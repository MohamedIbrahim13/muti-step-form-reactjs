const data = {
  plans: [
    {
      name: "Arcade",
      img: "./assets/images/icon-arcade.svg",
      monthlyPrice: 9,
      yearlyPrice: 90,
    },
    {
      name: "Advanced",
      img: "./assets/images/icon-advanced.svg",
      monthlyPrice: 12,
      yearlyPrice: 120,
    },
    {
      name: "Pro",
      img: "./assets/images/icon-pro.svg",
      monthlyPrice: 15,
      yearlyPrice: 150,
    },
  ],
  addons: [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
      id: "service",
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
      id: "storage",
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
      id: "profile",
    },
  ],
};

export default data;
