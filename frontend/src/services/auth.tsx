import { useContext, ReactNode, FC } from 'react';
import { loginUser } from './actions/loginActions';
// import { getUserData, logoutUser } from './actions/userActions';
import { AuthContext } from './context';
import { useDispatch, useSelector } from './hooks';

interface IProvideAuth {
    children: ReactNode;
}

export const ProvideAuth: FC<IProvideAuth> = ({ children }) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth(): any {
    return useContext(AuthContext);
}

export function useProvideAuth() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.loginReducer.userAuthProfile);

    // const getUser = () => dispatch(getUserData(user));

    const signIn = (userLogin: string, userPassword: string) => {
        dispatch(loginUser(userLogin, userPassword));
    }
    // const signOut = (token: string) => {
    //     dispatch(logoutUser(token));

    // }

    return {
        user,
        signIn,
    }
}