import React, { useState } from 'react';
import color from '../../fonts-colors/colors';
import s from './Search.module.css';
// import music from '../../music.json';

import {
  SearchForm,
  Page,
  FormTitle,
} from '../../fonts-colors/styledComponents';

export default function Search() {
  const [query, SetQuery] = useState('');

  function changeFilter(evt) {
    const value = evt.currentTarget.value;
    SetQuery(value);
  }

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
          onChange={changeFilter}
          filter={query}
        />
        {/* <button type="submit">найти композицию</button> */}

        {/* https://www.youtube.com/watch?v=MY6ZZIn93V8 */}
      </form>
    </Page>
  );
}
