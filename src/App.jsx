import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import SuccessScreen from "./pages/Succes/success";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/register/success" element={<SuccessScreen />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
