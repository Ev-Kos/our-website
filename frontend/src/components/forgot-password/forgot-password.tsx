import { NavLink } from 'react-router-dom';
import styles from './forgot-password.module.css';
import { RouteLinks } from '../../utils/routes';

const ForgotPassword = () => {
  return (
    <section className={styles.page}>
      <form className={styles.form}>
        <div className={styles.wrapForm}>
          <h1 className={styles.title}>Восстановление пароля</h1>
          <input className={styles.input}
            type='text'
            name={'name'}
            placeholder={'Укажите e-mail'}/>
          <button type='submit' className={styles.button}>Восстановить</button>
        </div>
          <div className={styles.container}>
            <p className={styles.text}>
              Вспомнили пароль?
            <NavLink to={RouteLinks.Login} className={styles.textLink}>
              Войти
            </NavLink>
          </p>
        </div>
      </form>
    </section>
  );
}

export default ForgotPassword