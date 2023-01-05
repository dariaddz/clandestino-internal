// // import { useEffect, useState } from 'react';
// // import { Outlet } from 'react-router-dom';
// import {
//   VideoList,
//   NoteList,
//   AudioList,
//   MediaListDiv,
//   MediaButton,
// } from '../../fonts-colors/styledComponents';
// import s from './MediaListComp.module.css';
// import { useGetMusicByIdQuery } from '../../redux/musicApi';

// export default function MediaListComp({ video, audio, notes, click, id }) {
//   const { data, isFetching } = useGetMusicByIdQuery(id); //rtk query

//   console.log('data', data);
//   console.log('isFetching', isFetching);

//   function renderList(item) {
//     return (
//       <li key={item}>
//         <a href={item} target="_blank" rel="noreferrer">
//           {item}
//         </a>
//       </li>
//     );
//   }

//   // useEffect(() => {
//   //   if (click === '') {
//   //     return;
//   //   }
//   //   console.log('вызываем эффект по клику');
//   // }, [click]);
//   //   () => {
//   //     console.log('click', click);
//   //     return function ShowList(element) {
//   //       element.classList.toggle('hidden');
//   //     };
//   //   },
//   //   [click]
//   //   // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//   //   // // Указываем, как сбросить этот эффект:
//   //   // return function cleanup() {
//   //   //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//   //   // };
//   // );

//   return (
//     <MediaListDiv>
//       {isFetching && !data && <div>Загружжжжжжаем....</div>}
//       {data && (
//         <>
//           {' '}
//           <VideoList>
//             <MediaButton className={s.mediaBtn}>видео</MediaButton>

//             <ul>{data.video.map(videoItem => renderList(videoItem))}</ul>
//           </VideoList>
//           <NoteList>
//             <MediaButton className={s.mediaBtn}>ноты</MediaButton>

//             <ul>{data.notes.map(notesItem => renderList(notesItem))}</ul>
//           </NoteList>
//           <AudioList>
//             <MediaButton className={s.mediaBtn}>аудио</MediaButton>
//             <ul>{data.audio.map(audioItem => renderList(audioItem))}</ul>
//           </AudioList>
//         </>
//       )}
//     </MediaListDiv>
//   );
// }
