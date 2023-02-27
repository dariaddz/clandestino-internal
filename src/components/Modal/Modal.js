import { createPortal } from 'react-dom';
import {
  MediaButton,
  VideoList,
  NoteList,
  AudioList,
  MediaListDiv,
  Backdrop,
  ModalDiv,
  MusicName,
  CloseBtn,
  LinkListItem,
  MediaListUl,
} from '../../fonts-colors/styledComponents';
import { useGetMusicByIdQuery } from '../../redux/musicApi';
import { useEffect, Suspense } from 'react';

import Loader from '../Loader';
const portal = document.querySelector('#portal');

export default function Modal({ id, open, onClose }) {
  const { data, isFetching } = useGetMusicByIdQuery(id); //rtk query

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropclick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  function renderList(item) {
    console.log(item);
    return (
      <>
        <LinkListItem key={item}>
          <a
            style={{ color: 'black' }}
            href={`${item}`}
            target="_blank"
            rel="noreferrer"
          >
            {item}
            {/* https://disk.yandex.ru/d/vCJBlMLhTXGIzA */}
          </a>
        </LinkListItem>
      </>
    );
  }

  if (!open) return null;
  return createPortal(
    <Backdrop onClick={handleBackdropclick}>
      <ModalDiv>
        <Suspense fallback={<Loader />}></Suspense>
        {isFetching && <Loader />}

        {data && !isFetching && (
          <>
            <MusicName>{data.musicItem.musicName}</MusicName>
            <MediaListDiv>
              {data?.musicItem.video.length > 0 && (
                <VideoList>
                  <MediaButton>видео</MediaButton>

                  <MediaListUl>
                    {data?.musicItem.video.map(videoItem =>
                      renderList(videoItem)
                    )}
                  </MediaListUl>
                </VideoList>
              )}

              {data?.musicItem.notes.length > 0 && (
                <NoteList>
                  <MediaButton>ноты</MediaButton>

                  <MediaListUl>
                    {data?.musicItem.notes.map(notesItem =>
                      renderList(notesItem)
                    )}
                  </MediaListUl>
                </NoteList>
              )}
              {data?.musicItem.audio.length > 0 && (
                <AudioList>
                  <MediaButton>аудио</MediaButton>
                  <MediaListUl>
                    {data?.musicItem.audio.map(audioItem =>
                      renderList(audioItem)
                    )}
                  </MediaListUl>
                </AudioList>
              )}
            </MediaListDiv>
            <CloseBtn onClick={onClose}> X</CloseBtn>
          </>
        )}
      </ModalDiv>
    </Backdrop>,
    portal
  );
}
