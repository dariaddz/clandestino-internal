import music from '../../music.json';

export default function Navigation() {
  return (
    <ul>
      {music.map(musicItem => (
        <li>{musicItem.name}</li>
      ))}
    </ul>
  );
}
