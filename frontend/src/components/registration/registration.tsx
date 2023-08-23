import { NavLink } from 'react-router-dom';
import styles from './registration.module.css';
import { RouteLinks } from '../../utils/routes';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from '../../services/hooks';
import { userRegister } from '../../services/actions/registrationActions';


type TInputState = {
  login: string,
  name: string,
  surname: string,
  secondname?: string,
  email: string,
  password: string,
  errLogin: boolean,
  errName: boolean,
  errSurname: boolean,
  errEmail: boolean,
  errPassword: boolean,
}

function Registration() {
  const [state, setState] = useState<TInputState>({
    login: '',
    name: '',
    surname: '',
    secondname: '',
    email: '',
    password: '',
    errLogin: false,
    errName: false,
    errSurname: false,
    errEmail: false,
    errPassword: false,
  });
  const dispatch = useDispatch();

  const validity = () => {
    if (state.login === '') {
      setState(prevState => ({...prevState, errLogin: true}));
    }
    if (state.name === '') {
      setState(prevState => ({...prevState, errName: true}));
    }
    if (state.surname === '') {
      setState(prevState => ({...prevState, errSurname: true}));
    }
    if (state.email === '') {
      setState(prevState => ({...prevState, errEmail: true}));
    }
    if (state.password === '') {
      setState(prevState => ({...prevState, errPassword: true}));
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    validity();
    dispatch(userRegister(state.login, state.name, state.surname, state.secondname, state.email, state.password));
  };

  return (
    <section className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.wrapForm}>
          <h1 className={styles.title}>Регистрация</h1>
          <div className={styles.inputWrap}>
            <input className={styles.input}
              type='text'
              name={'login'}
              placeholder={'Логин'}
              onChange={onChange}
              value={state.login}
              required/>
            <span className={styles.error}>{state.errLogin ? 'Поле обязательно для заполнения' : ''}</span>
          </div>
          <div className={styles.inputWrap}>
            <input className={styles.input}
              type='text'
              name={'name'}
              placeholder={'Имя'}
              onChange={onChange}
              value={state.name} required/>
              <span className={styles.error}>{state.errName ? 'Поле обязательно для заполнения' : ''}</span>
          </div>
          <div className={styles.inputWrap}>
            <input className={styles.input}
              type='text'
              name={'surname'}
              placeholder={'Фамилия'}
              onChange={onChange}
              value={state.surname} required/>
              <span className={styles.error}>{state.errSurname ? 'Поле обязательно для заполнения' : ''}</span>
          </div>
          <div className={styles.inputWrap}>
            <input className={styles.input}
              type='text'
              name={'secondname'}
              placeholder={'Отчество'}
              onChange={onChange}
              value={state.secondname}/>
          </div>
          <div className={styles.inputWrap}>
            <input className={styles.input}
              type='email'
              name={'email'}
              placeholder={'E-mail'}
              onChange={onChange}
              value={state.email} required/>
              <span className={styles.error}>{state.errEmail ? 'Поле обязательно для заполнения' : ''}</span>
          </div>
          <div className={styles.inputWrap}>
            <input className={styles.input}
              type='password'
              name={'password'}
              placeholder={'Password'}
              onChange={onChange}
              value={state.password} required/>
              <span className={styles.error}>{state.errPassword ? 'Поле обязательно для заполнения' : ''}</span>
          </div>
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