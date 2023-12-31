import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
export default function RootLayout() {
  const { currStep } = useContext(dataContext);
  return (
    <main>
      <div className="sidebar">
        <ul>
          <li>
            <p>
              Step 1<span>Your info</span>
            </p>
          </li>
          <li>
            <p>
              Step 2<span>Select plan</span>
            </p>
          </li>
          <li>
            <p>
              Step 3<span>Add-ons</span>
            </p>
          </li>
          <li>
            <p>
              Step 4<span>Summary</span>
            </p>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
}
