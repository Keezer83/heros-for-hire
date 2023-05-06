export default function Characters(props) {
  return (
    // <div className="list-group mb-4">
    //   {characters.map((character) => (
    <tr key={props.id}>
      <td>{props.name}</td>
      <td>{props.biography.firstAppearance}</td>
      <td>{props.appearance.height[0]}</td>
      <td>{props.appearance.weight[0]}</td>
      <td>{props.biography.placeOfBirth}</td>
      <td>{props.appearance.race}</td>
    </tr>
  );
}
