import React, { useEffect, useState } from 'react';
import color from '../../fonts-colors/colors';
import s from './Search.module.css';
import music from '../../music.json';

import {
  SearchForm,
  Page,
  FormTitle,
} from '../../fonts-colors/styledComponents';

export default function Search() {
  const [filter, setFilter] = useState(
    window.localStorage.getItem('filter' ?? '')
  );
  // console.log('filter', filter);
  // console.log('music', music);

  const filteredMusic = music.filter(musicItem =>
    musicItem.name.toLowerCase().includes(filter)
  );

  console.log(filteredMusic);
  // console.log(
  //   music.filter(musicItem => musicItem.name.toLowerCase().includes(filter))
  // );

  // const contactsToShow = data?.filter(({ name }) =>
  //        name.toLowerCase().includes(filterValue.toLowerCase())
  //      );

  function handleFilterChange(evt) {
    const value = evt.currentTarget.value;
    setFilter(value);
  }

  useEffect(() => {
    window.localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  const toShow = () => {
    if (filteredMusic.length === 0) {
      return music;
    } else {
      return filteredMusic;
    }
  };

  // const musicToShow = toShow();
  // console.log('toShow', musicToShow);

  return (
    <Page
      style={{
        backgroundColor: `${color.accentColor}`,
        // paddingTop: ,
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
    >
      <form>
        <FormTitle>Найти композицию</FormTitle>
        <SearchForm
          type="text"
          className={s.search}
          placeholder="Название..."
          onChange={handleFilterChange}
          toShow={toShow}
        />
        {/* <button type="submit">найти композицию</button> */}

        {/* https://www.youtube.com/watch?v=MY6ZZIn93V8 */}
      </form>
    </Page>
  );
}
