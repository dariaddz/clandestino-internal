import {
  VideoList,
  NoteList,
  AudioList,
  MediaList,
} from '../../fonts-colors/styledComponents';

export default function MediaListComp() {
// {
//   // video,
//   // audio, notes
// }
  // console.log('video', video);

  return (
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
  );
}
