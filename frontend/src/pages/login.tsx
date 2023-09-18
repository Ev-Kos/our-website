import AppHeader from "../components/app-header/app-header";
import Login from "../components/login/login";
import { useNavigate } from 'react-router-dom';
import { useSelector } from '../services/hooks';
import { RouteLinks } from "../utils/routes";

export default function LoginPage() {

  // const login = useSelector((store) => store.loginReducer.userLoginSuccess);

  // const navigate = useNavigate();

  // if (login) {
  //   navigate(RouteLinks.Home);
  // }

  return (
    <>
      <AppHeader/>
      <Login />
    </>
  )
}