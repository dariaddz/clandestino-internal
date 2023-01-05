import { Thumb, MusicName } from '../../fonts-colors/styledComponents';
// import s from './MusicItem.module.css';
import Modal from '../../components/Modal';
import { useGetMusicQuery } from '../../redux/musicApi'; //rtk query
import { useState } from 'react';

export default function MusicItem() {
  const { data, isFetching } = useGetMusicQuery(); //rtk query
  const [isOpen, setIsOpen] = useState(false);
  const [musicId, setMusicId] = useState();

  return (
    <>
      {isFetching && !data && <div>Загружжжжжжаем....</div>}
      {data?.map(
        musicItem =>
          musicItem.archive === false && (
            <Thumb
              key={musicItem.id}
              onClick={() => {
                setIsOpen(true);
                setMusicId(musicItem.id);
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
