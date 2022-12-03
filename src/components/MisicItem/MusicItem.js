import {
  Thumb,
  VideoList,
  NoteList,
  AudioList,
  MediaTypes,
  MediaButton,
  MediaList,
} from '../../fonts-colors/styledComponents';
import s from './MusicItem.module.css';

import music from '../../music.json';

export default function MusicItem() {
  return (
    <>
      {music.map(musicItem => (
        <Thumb>
          <h3>{musicItem.name}</h3>
          <MediaTypes>
            <MediaButton className={s.mediaBtn}>video</MediaButton>
            <MediaButton className={s.mediaBtn}>notes</MediaButton>
            <MediaButton className={s.mediaBtn}>audio</MediaButton>
          </MediaTypes>
          <MediaList>
            <VideoList>
              <ul>
                <li>video 1</li>
                <li>video 2</li>
                <li>video 3</li>
              </ul>
            </VideoList>
            <NoteList>
              <ul>
                <li>notes 1</li>
                <li>notes 2</li>
                <li>notes 3</li>
              </ul>
            </NoteList>
            <AudioList>
              <ul>
                <li>audio 1</li>
                <li>audio 2</li>
                <li>audio 3</li>
              </ul>
            </AudioList>
          </MediaList>
        </Thumb>
      ))}
    </>
  );
}
