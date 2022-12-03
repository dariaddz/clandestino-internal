import music from '../../music.json';

export default function Navigation() {
  return (
    <ul>
      {music.map(musicItem => (
        <li key={musicItem._id}>{musicItem.name}</li>
      ))}
    </ul>
  );
}
