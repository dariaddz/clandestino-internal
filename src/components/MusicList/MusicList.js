import { Page } from '../../fonts-colors/styledComponents';
// import s from './MusicItem.module.css';

import MusicItem from '../../components/MisicItem';
// import LoadMore from '../../components/LoadMore';

export default function MusicList() {
  return (
    <Page>
      <Page>
        <MusicItem />
      </Page>
      {/* //isFetching */}
      {/* <LoadMore /> */}
    </Page>
  );
}
