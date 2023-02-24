import React from 'react';
// import { useDispatch } from 'react-redux';
// import { changeFilter } from '../../redux/filterSlice';
import color from '../../fonts-colors/colors';
// import { Link } from 'react-router-dom';
// import s from './Filter.module.css';

import {
  // SearchForm,
  Page,
  // FormTitle,
} from '../../fonts-colors/styledComponents';

// ========блок с заголовком-заглушкой ============

export default function Filter() {
  return (
    <Page
      style={{
        backgroundColor: `${color.accentColor}`,
        // paddingTop: ,
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
    >
      {/* <Link to="/music">Наши композиции</Link>
      <Link to="/program">Наши программы</Link> */}
    </Page>
  );
}

// ========блок с поиском ============
// export default function Filter() {
//   const dispatch = useDispatch();

//   const handleChange = e => {
//     dispatch(changeFilter(e.target.value));
//   };

//   return (
//     <Page
//       style={{
//         backgroundColor: `${color.accentColor}`,
//         // paddingTop: ,
//         paddingLeft: '10px',
//         paddingRight: '10px',
//       }}
//     >
//       <form>
//         <FormTitle>Найти композицию</FormTitle>
//         <SearchForm
//           type="text"
//           name="filter"
//           id="filter"
//           className={s.search}
//           placeholder="Название..."
//           onChange={handleChange}
//           // toShow={toShow}
//         />
//         {/* <button type="submit">найти композицию</button> */}

//         {/* https://www.youtube.com/watch?v=MY6ZZIn93V8 */}
//       </form>
//     </Page>
//   );
// }
