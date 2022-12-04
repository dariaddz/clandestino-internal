import s from '../LoginPage/LoginPage.module.css';
import {
  MediaButton,
  Page,
  PassForm,
  FormTitle,
} from '../../fonts-colors/styledComponents';

export default function LoginPage() {
  return (
    <Page>
      <form
        //   onSubmit={handleSubmit}
        autoComplete="off"
      >
        <FormTitle>Пожалуйста, введите пароль</FormTitle>
        <label className={s.label}>
          <PassForm
            className={s.input}
            type="password"
            name="password"
            // value={password}
            //   onChange={handleChange}
          />
        </label>
        <MediaButton className={s.button} type="submit">
          Войти
        </MediaButton>
      </form>
    </Page>
  );
}
