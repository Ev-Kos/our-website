import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { RouteLinks } from "../utils/routes";
import LoginPage from './login';
import RegistrationPage from './regiatration';
import ForgotPasswordPage from './forgot-password';

const routes: RouteObject[] = [
  {
    path: RouteLinks.Home,
    element: <span>HomePage</span>,
  },
  {
    path: RouteLinks.Login,
    element: <LoginPage />,
  },
  {
    path: RouteLinks.Register,
    element: <RegistrationPage />,
  },
  {
    path: RouteLinks.ForgotPassword,
    element: <ForgotPasswordPage />,
  },
  {
    path: '*',
    element: <span>ErrorPage</span>,
  },
];

export const router = createBrowserRouter(routes);