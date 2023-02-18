import color from '../../fonts-colors/colors';
import {
  MediaButton,
  Page,
  PassForm,
  FormTitle,
} from '../../fonts-colors/styledComponents';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';

export default function LoginPage() {
  // const [pass, setPass] = useState('');

  // const handlePassChange = event => {
  //   // console.log(event.target.value);
  //   setPass(event.target.value);
  // };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        userName: form.elements.userName.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
    navigate('/music', { replace: true });
    //   setPass('');
  };

  return (
    <Page>
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

        <MediaButton
          style={{
            backgroundColor: `${color.accentColor}`,
            cursor: 'pointer',
          }}
          type="submit"
        >
          Войти
        </MediaButton>
      </form>
    </Page>
  );
}
