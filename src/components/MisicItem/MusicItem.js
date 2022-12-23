import {
  Thumb,
  MediaTypes,
  MediaButton,
  MediaList,
  MusicName,
  VideoList,
  NoteList,
  AudioList,
} from '../../fonts-colors/styledComponents';
import s from './MusicItem.module.css';

// import MediaListComp from '../MusicList';
import { useGetMusicQuery } from '../../redux/musicApi'; //rtk query
// import { useSelector } from 'react-redux';

export default function MusicItem() {
  const { data, isFetching } = useGetMusicQuery(); //rtk query
  // const filterValue = useSelector(state => state.value);

  // const filteredContacts = data?.filter(({ musicName }) =>
  //   musicName.toLowerCase().includes(filterValue.toLowerCase())
  // );

  console.log('music fetch from Api', data);
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
                    {musicItem.video.map(videoItem => (
                      <li key={videoItem}>
                        <a href={videoItem} target="_blank" rel="noreferrer">
                          {videoItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </VideoList>
                <NoteList>
                  <ul>
                    {musicItem.notes.map(notesItem => (
                      <li key={notesItem}>
                        <a href={notesItem} target="_blank" rel="noreferrer">
                          {notesItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </NoteList>
                <AudioList>
                  <ul>
                    {musicItem.audio.map(audioItem => (
                      <li key={audioItem}>
                        <a href={audioItem} target="_blank" rel="noreferrer">
                          {audioItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AudioList>
              </MediaList>
              {/* <MediaListComp
              // video={musicItem.video}
              /> */}
            </Thumb>
          )
      )}
    </>
  );
}
