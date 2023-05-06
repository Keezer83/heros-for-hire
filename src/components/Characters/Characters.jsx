import { useState } from "react";

export default function Characters(props) {
  const [characterName, setChracterName] = useState("");
  const [characterHeight, setChracterHeight] = useState("");
  const [characterWeight, setChracterWeight] = useState("");
  const [characterHome, setChracterHome] = useState("");
  const [characterRace, setChracterRace] = useState("");
  return (
    // <div className="list-group mb-4">
    //   {characters.map((character) => (
    <tr key={props.id}>
      <td className="list-group-item">{props.name}</td>
      <td className="list-group-item">{props.appearance.height[0]}</td>
      <td className="list-group-item">{props.appearance.weight[0]}</td>
      <td className="list-group-item">{props.biography.placeOfBirth}</td>
      <td className="list-group-item">{props.appearance.race}</td>
    </tr>
  );
}
