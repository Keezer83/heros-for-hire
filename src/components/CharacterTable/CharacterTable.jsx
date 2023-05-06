import Characters from "../Characters/Characters";

export default function CharacterTable({ characters, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="mb-4">
      <table className="table table-bordered table-dark opacity-75">
        <thead>
          <tr>
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
                //checking to see if I am passing the character props through properly
                {...character}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
