import React, { useEffect, useState } from 'react';
import color from '../../fonts-colors/colors';
import s from './Search.module.css';
// import music from '../../music.json';

import {
  SearchForm,
  Page,
  FormTitle,
} from '../../fonts-colors/styledComponents';

export default function Search() {
  const [filter, setFilter] = useState(
    window.localStorage.getItem('filter' ?? '')
  );

  function handleFilterChange(evt) {
    const value = evt.currentTarget.value;
    setFilter(value);
  }

  useEffect(() => {
    window.localStorage.setItem('filter', JSON.stringify('filter'));
  });

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
          filter={filter}
        />
        {/* <button type="submit">найти композицию</button> */}

        {/* https://www.youtube.com/watch?v=MY6ZZIn93V8 */}
      </form>
    </Page>
  );
}
