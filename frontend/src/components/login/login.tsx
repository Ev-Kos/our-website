import styles from './login.module.css';

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
            <a href='#' className={styles.textLink}>
              Зарегистрироваться
            </a>
          </div>
          <div className={styles.container}>
            <p className={styles.text}>
              Забыли пароль?
            </p>
            <a href='#' className={styles.textLink}>
              Восстановить пароль
            </a>
          </div>
        </div>

      </form>
    </section>
  )
}

export default Login