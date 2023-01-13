import { Link } from 'react-router-dom';
import { H2 } from '../../fonts-colors/styledComponents';

export default function Navigation() {
  return (
    <div
      styled={{
        width: '80px',
        display: 'block',
        marginTop: 'auto',
        maarginBottom: 'auto',
      }}
    >
      <Link to="/music">
        <H2>Наши композиции</H2>
      </Link>
      <Link to="/program">
        {' '}
        <H2>Наши программы</H2>
      </Link>
    </div>
  );
}
