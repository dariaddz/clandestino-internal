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
// import toShow from '../Search';
// import { useEffect } from 'react';

export default function MusicItem() {
  //   const musicToShow = () => {
  //     filteredMusic;
  //   };

  //   console.log('musicToShow', filteredMusic());

  //   useEffect(() => {
  //     const { data } = toShow();
  //     if (!data) {
  //       return;
  //     }
  //     // const { data } = toShow();
  //     console.log('musicToShow', data);
  //   }, [data]);

  //   console.log('musicToShow', data);

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