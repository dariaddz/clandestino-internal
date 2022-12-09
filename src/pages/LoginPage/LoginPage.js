import s from '../LoginPage/LoginPage.module.css';
import {
  MediaButton,
  Page,
  PassForm,
  FormTitle,
} from '../../fonts-colors/styledComponents';
import { useState } from 'react';

export default function LoginPage() {
  const [pass, setPass] = useState('');

  const handlePassChange = event => {
    // console.log(event.target.value);
    setPass(event.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    //  dispatch(authOperations.logIn({ email, password }));

    setPass('');
  };

  return (
    <Page>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormTitle>Пожалуйста, введите пароль</FormTitle>
        <label className={s.label}>
          <PassForm
            className={s.input}
            type="password"
            name="password"
            value={pass}
            onChange={handlePassChange}
          />
        </label>
        <MediaButton className={s.button} type="submit">
          Войти
        </MediaButton>
      </form>
    </Page>
  );
}
