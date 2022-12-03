import {
  Thumb,
  VideoList,
  NoteList,
  AudioList,
  MediaTypes,
  MediaButton,
  MediaList,
  MusicName,
} from '../../fonts-colors/styledComponents';
import s from './MusicItem.module.css';

import music from '../../music.json';
// import filter from '../Search';

export default function MusicItem(filter) {
  console.log(filter);

  //    const contactsToShow = data?.filter(({ name }) =>
  //      name.toLowerCase().includes(filterValue.toLowerCase())
  //    );

  // query === '': listToShow = music ? listToShow=music.filter.toLowerCase
  return (
    <>
      {music.map(musicItem => (
        <Thumb>
          <MusicName>{musicItem.name}</MusicName>
          <MediaTypes>
            <MediaButton className={s.mediaBtn}>видео</MediaButton>
            <MediaButton className={s.mediaBtn}>ноты</MediaButton>
            <MediaButton className={s.mediaBtn}>аудио</MediaButton>
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
