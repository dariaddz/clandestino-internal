import color from '../../fonts-colors/colors';
import {
  MediaButton,
  Page,
  PassForm,
  FormTitle,
} from '../../fonts-colors/styledComponents';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../../components/Loader';

// import { useState } from 'react';

export default function LoginPage() {
  // const [formDisabled, setFormDisabled] = useState('false');

  const dispatch = useDispatch();
  const { isPending } = useAuth();

  // const [formDisabled, setFormDisabled] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        userName: form.elements.userName.value,
        password: form.elements.password.value,
      })
    );

    // dispatch(setFormDisabled(true), isPending);
    // console.log(formDisabled);
    form.reset();
  }

  return (
    <Page>
      {isPending && <Loader />}
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormTitle>Пожалуйста, введите пароль</FormTitle>
        <label>
          <select required="required" name="userName">
            <option>Музыкант</option>
            <option>Дирижёр</option>
          </select>
        </label>

        <label>
          <PassForm
            type="password"
            name="password"
            // value={pass}
            // onChange={handlePassChange}
          />
        </label>
        {isPending ? (
          <Loader />
        ) : (
          <MediaButton
            id="mediaButton"
            style={{
              backgroundColor: `${color.accentColor}`,
              cursor: 'pointer',
            }}
            type="submit"
          >
            Войти
          </MediaButton>
        )}
        {/* <MediaButton
          className={`${s.disabled} ${s.mediaButton}`}
          style={{
            backgroundColor: `${color.accentColor}`,
            cursor: 'pointer',
          }}
          type="submit"
        >
          Войти
        </MediaButton> */}
      </form>
    </Page>
  );
}
