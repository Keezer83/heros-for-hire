import Characters from "../Characters/Characters";

export default function CharacterTable({
  characters,
  loading,
  OnCharacterClick,
}) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="mb-4">
      <table className="table table-bordered table-dark opacity-75">
        <thead>
          <tr>
            <td>Picture</td>
            <th>Character Name</th>
            <th>First Appearance</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Place of Birth</th>
            <th>Race</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => {
            return (
              <Characters
                key={character.id}
                {...character}
                OnCharacterClick={OnCharacterClick}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
