export default function Characters({
  images,
  name,
  biography,
  appearance,
  OnCharacterClick,
}) {
  return (
    <tr>
      <td>
        <img
          onClick={() => OnCharacterClick({ images, name })}
          src={images.xs}
        />
      </td>
      <td>{name}</td>
      <td>{biography.firstAppearance}</td>
      <td>{appearance.height[0]}</td>
      <td>{appearance.weight[0]}</td>
      <td>{biography.placeOfBirth}</td>
      <td>{appearance.race}</td>
    </tr>
  );
}
