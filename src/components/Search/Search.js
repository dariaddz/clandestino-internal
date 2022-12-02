import color from '../../fonts-colors/colors';
import s from './Search.module.css';
// import music from '../../music.json';

import { SearchForm } from '../../fonts-colors/styledComponents';

export default function Search() {
  // const musicBd = music;

  return (
    <div
      style={{
        backgroundColor: `${color.accentColor}`,
        // paddingTop: ,
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
    >
      <form>
        <SearchForm
          type="text"
          className={s.search}
          placeholder="Название композиции"
        />
        {/* <button type="submit">найти композицию</button> */}

        {/* https://www.youtube.com/watch?v=MY6ZZIn93V8 */}
      </form>
    </div>
  );
}
