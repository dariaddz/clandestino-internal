import { useAddMusicMutation } from '../../redux/musicApi';

import { useState } from 'react';
import { MediaButton } from '../../fonts-colors/styledComponents';
export default function UploadPage() {
  const [addMusic] = useAddMusicMutation();

  const [state, setState] = useState({
    musicName: '',
    // audio: []
  });

  const {
    musicName,
    // audio
  } = state;

  const onHandleChange = evt => {
    const { name, value } = evt.currentTarget;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.currentTarget.elements.musicName.value);
    e.currentTarget.reset();
    addMusic(e.currentTarget.elements.musicName.value);

    addMusic({
      musicName,
      //   audio
    });
    setState({
      musicName: '',
      //   audio: []
    });
  };

  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label>
          название
          <input
            type="text"
            name="musicName"
            onChange={onHandleChange}
          ></input>{' '}
        </label>

        {/* <label>
          аудио <input type="text" name="audio"></input>
        </label> */}
        {/* <label>
          видео <input type="text" name="video"></input>{' '}
        </label>
        <label>
          ноты <input type="text" name="notes"></input>{' '}
        </label>  */}
        <MediaButton type="submit">добавить </MediaButton>
      </form>
    </div>
  );
}
