import {
  Page,
  //   Thumb,
  //   VideoList,
  //   NoteList,
  //   AudioList,
  //   MediaTypes,
  //   MediaButton,
  //   MediaList,
  //   MusicName,
} from '../../fonts-colors/styledComponents';
// import s from './MusicItem.module.css';

import MusicItem from '../../components/MisicItem';
import LoadMore from '../../components/LoadMore';
// import music from '../../music.json';

export default function MusicList() {
  return (
    <Page>
      <Page>
        <MusicItem />
      </Page>
      <LoadMore />
    </Page>
  );
}
