import { RouteLinks } from "../../utils/routes";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginPage from "../../pages/login";
import RegistrationPage from "../../pages/regiatration";
import ForgotPasswordPage from "../../pages/forgot-password";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RouteLinks.Login} element={<LoginPage />} />
      <Route path={RouteLinks.Register} element={<RegistrationPage />} />
      <Route path={RouteLinks.ForgotPassword} element={<ForgotPasswordPage />} />
    </>

  )
)
export default App