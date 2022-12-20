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

// import { useEffect, useState } from 'react';
// import { musicSelectors, musicOperations } from '../../redux/music';

// import music from '../../music.json';
// import * as musicApi from '../../redux/musicApi';
import { useGetMusicQuery } from '../../redux/musicApi'; //rtk query

// import Axios from 'axios';
// import { fetchMusic } from '../../redux/music/musicOperations';
// import toShow from '../Search';
// import { useDispatch, useSelector } from 'react-redux';

export default function MusicItem() {
  //   // const dispatch = useDispatch();
  //   // const music = useSelector(musicSelectors.getMusic);

  //   // useEffect(() => dispatch(musicOperations.fetchMusic()), [dispatch]);

  //   // console.log('music', music);
  //   //   const musicToShow = () => {
  //   //     filteredMusic;
  //   //   };

  //   //   useEffect(() => {
  //   //     const { data } = toShow();
  //   //     if (!data) {
  //   //       return;
  //   //     }
  //   //     // const { data } = toShow();
  //   //     console.log('musicToShow', data);
  //   //   }, [data]);

  //   //   console.log('musicToShow', data);

  //   //    const contactsToShow = data?.filter(({ name }) =>
  //   //      name.toLowerCase().includes(filterValue.toLowerCase())
  //   //    );

  //   // query === '': listToShow = music ? listToShow=music.filter.toLowerCase

  const {
    data,
    isFetching,
    //  error
  } = useGetMusicQuery(); //rtk query

  // const [music, setMusic] = useState([]);
  // useEffect(() => {
  //   // musicApi.fetchMusic().then(setMusic);
  //   setMusic(data);
  // }, [data]);
  console.log('music fetch from Api', data);

  console.log('isFetching', isFetching);
  return (
    <>
      {isFetching && <div>Загружжжжжжаем....</div>}
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
