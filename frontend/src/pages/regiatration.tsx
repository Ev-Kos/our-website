import AppHeader from "../components/app-header/app-header";
import Registration from "../components/registration/registration";
import { useNavigate } from 'react-router-dom';
import { useSelector } from '../services/hooks';
import { RouteLinks } from "../utils/routes";

export default function RegistrationPage():JSX.Element {
  const register = useSelector((store) => store.registerReducer.registrationSuccess);

  const navigate = useNavigate();

  if (register) {
    navigate(RouteLinks.Login);
  }

  return (
    <>
      <AppHeader/>
      <Registration />
    </>

  )

}