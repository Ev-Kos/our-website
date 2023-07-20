import { RouteLinks } from "../../utils/utils";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginPage from "../pages/login";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RouteLinks.Login} element={<LoginPage />} />
  )
)
export default App