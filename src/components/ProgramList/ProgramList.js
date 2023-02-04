import React from 'react';
import { Page } from '../../fonts-colors/styledComponents';
import { Thumb, MusicName } from '../../fonts-colors/styledComponents';

import Modal from '../../components/Modal';
import { useGetMusicQuery } from '../../redux/musicApi'; //rtk query
import { useState } from 'react';

export default function ProgramList() {
  const { data, isFetching } = useGetMusicQuery(); //rtk query
  const [isOpen, setIsOpen] = useState(false);
  const [musicId, setMusicId] = useState();
  return (
    <Page>
      {isFetching && !data && <div>Загружжжжжжаем....</div>}
      {data?.music.map(
        musicItem =>
          musicItem.archive === false && (
            <Thumb
              key={musicItem._id}
              onClick={() => {
                setIsOpen(true);
                setMusicId(musicItem._id);
              }}
            >
              <MusicName>{musicItem.musicName}</MusicName>
            </Thumb>
          )
      )}
      {/* <Modal
        id={musicId}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      /> */}
    </Page>
  );
}
