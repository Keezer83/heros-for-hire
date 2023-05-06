export default function Characters(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.biography.firstAppearance}</td>
      <td>{props.appearance.height[0]}</td>
      <td>{props.appearance.weight[0]}</td>
      <td>{props.biography.placeOfBirth}</td>
      <td>{props.appearance.race}</td>
    </tr>
  );
}
