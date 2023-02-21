import { Thumb, MusicName } from '../../fonts-colors/styledComponents';
// import s from './MusicItem.module.css';
import Modal from '../../components/Modal';
import Loader from '../Loader';
import { useGetMusicQuery } from '../../redux/musicApi'; //rtk query
import { useState } from 'react';

export default function MusicItem() {
  const { data, isFetching } = useGetMusicQuery(); //rtk query
  const [isOpen, setIsOpen] = useState(false);
  const [musicId, setMusicId] = useState();

  console.log('musicId в начале', musicId);
  return (
    <>
      {isFetching && !data && <Loader />}

      {data?.music.map(
        musicItem =>
          musicItem.archive === false && (
            <Thumb
              key={musicItem._id}
              onClick={() => {
                setIsOpen(true);
                setMusicId(musicItem._id);
                console.log(musicId);
              }}
            >
              <MusicName>{musicItem.musicName}</MusicName>
            </Thumb>
          )
      )}

      <Modal
        id={musicId}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}
