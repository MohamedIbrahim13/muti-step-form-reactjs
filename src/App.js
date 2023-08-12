import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import FormSection from "./components/FormSection";
// import PersonalInfo, { infoAction } from "./components/PersonalInfo";
// import Plans from "./components/Plans";
// import Addons from "./components/Addons";
// import Finishup from "./components/Finishup";
// import Thanks from "./components/Thanks";
import { ContextProvider } from "./context/DataContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<FormSection />} />
      {/* <Route path="plans" element={<Plans />} />
      <Route path="addons" element={<Addons />} />
      <Route path="finishup" element={<Finishup />} />
      <Route path="feedback" element={<Thanks />} /> */}
    </Route>
  )
);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
