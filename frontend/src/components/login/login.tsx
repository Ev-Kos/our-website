import { NavLink } from 'react-router-dom';
import styles from './login.module.css';
import { RouteLinks } from '../../utils/routes';
import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { useAuth } from '../../services/auth';

type TInputState = {
  login: string,
  password: string,
  error: boolean,
}

const Login = () => {
  const [state, setState] = useState<TInputState>({
    login: '',
    password: '',
    error: false,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const auth = useAuth();
  const login = useCallback((e: FormEvent) => {
      e.preventDefault();
      auth.signIn(state.login, state.password);
    },
    [auth, state.login, state.password]
  );

  return (
    <section className={styles.login}>
      <form className={styles.form} onSubmit={login}>
        <div className={styles.wrapForm}>
          <h1 className={styles.title}>Вход</h1>
          <input className={styles.input}
            type='text'
            name={'login'}
            placeholder={'Логин'}
            value={state.login}
            onChange={onChange}/>
          <input className={styles.input}
            type='password'
            name={'password'}
            placeholder={'Password'}
            value={state.password}
            onChange={onChange}/>
          <button type='submit' className={styles.button}>Войти</button>
        </div>
        <div>
          <div className={styles.container}>
            <p className={styles.text}>
              Вы — новый пользователь?
            </p>
            <NavLink to={RouteLinks.Register} className={styles.textLink}>
              Зарегистрироваться
            </NavLink>
          </div>
          <div className={styles.container}>
            <p className={styles.text}>
              Забыли пароль?
            </p>
            <NavLink to={RouteLinks.ForgotPassword} className={styles.textLink}>
              Восстановить пароль
              </NavLink>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Login