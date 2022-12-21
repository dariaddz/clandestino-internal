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

import { useGetMusicQuery } from '../../redux/musicApi'; //rtk query
// import { useSelector } from 'react-redux';

export default function MusicItem() {
  const { data, isFetching } = useGetMusicQuery(); //rtk query
  // const filterValue = useSelector(state => state.value);
  console.log('music fetch from Api', data);

  // const filteredContacts = data?.filter(({ musicName }) =>
  //   musicName.toLowerCase().includes(filterValue.toLowerCase())
  // );

  // console.log('music fetch from Api', data);
  console.log('isFetching', isFetching);

  return (
    <>
      {isFetching && !data && <div>Загружжжжжжаем....</div>}
      {data?.map(
        musicItem =>
          musicItem.archive === false && (
            <Thumb key={musicItem.id}>
              <MusicName>{musicItem.musicName}</MusicName>
              <MediaTypes>
                {musicItem.video.length > 0 && (
                  <MediaButton className={s.mediaBtn}>видео</MediaButton>
                )}
                {musicItem.notes.length > 0 && (
                  <MediaButton className={s.mediaBtn}>ноты</MediaButton>
                )}

                {musicItem.audio.length > 0 && (
                  <MediaButton className={s.mediaBtn}>аудио</MediaButton>
                )}
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
          )
      )}
    </>
  );
}
