import { NavLink } from 'react-router-dom';
import styles from './registration.module.css';
import { RouteLinks } from '../../utils/routes';

const Registration = () => {
  return (
    <section className={styles.page}>
      <form className={styles.form}>
        <div className={styles.wrapForm}>
          <h1 className={styles.title}>Регистрация</h1>
          <input className={styles.input}
            type='text'
            name={'name'}
            placeholder={'Имя'}/>
          <input className={styles.input}
            type='email'
            name={'email'}
            placeholder={'E-mail'}/>
          <input className={styles.input}
            type='password'
            name={'password'}
            placeholder={'Password'}/>
          <button type='submit' className={styles.button}>Зарегистрироваться</button>
        </div>
          <div className={styles.container}>
          <p className={styles.text}>
            Уже зарегистрированы?
            <NavLink to={RouteLinks.Login} className={styles.textLink}>
              Войти
            </NavLink>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Registration