import { NavLink } from 'react-router-dom';
import styles from './login.module.css';
import { RouteLinks } from '../../utils/routes';

const Login = () => {
  return (
    <section className={styles.login}>
      <form className={styles.form}>
        <div className={styles.wrapForm}>
          <h1 className={styles.title}>Вход</h1>
          <input className={styles.input}
            type='email'
            name={'email'}
            placeholder={'E-mail'}/>
          <input className={styles.input}
            type='password'
            name={'password'}
            placeholder={'Password'}/>
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
            ForgotPassword
          </div>
        </div>
      </form>
    </section>
  )
}

export default Login