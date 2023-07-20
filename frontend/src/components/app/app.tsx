import { RouteLinks } from "../../utils/routes";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginPage from "../../pages/login";
import RegistrationPage from "../../pages/regiatration";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RouteLinks.Login} element={<LoginPage />} />
      <Route path={RouteLinks.Register} element={<RegistrationPage />} />
    </>

  )
)
export default App