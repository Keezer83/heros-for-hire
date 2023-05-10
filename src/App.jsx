import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PageTurn from "./components/PageTurn/PageTurn";
import "bootstrap/dist/css/bootstrap.min.css";
import CharacterTable from "./components/CharacterTable/CharacterTable";
import CharacterSearch from "./components/CharacterSearch/CharacterSearch";
import Modal from "./components/Modal/Modal";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      setCharacters(response.data);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  const paginate = (pageNumber) => {
    if (pageNumber === "prev") {
      setCurrentPage(currentPage - 1);
    } else if (pageNumber === "next") {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastFilteredCharacter = currentPage * charactersPerPage;
  const indexOfFirstFilteredCharacter =
    indexOfLastFilteredCharacter - charactersPerPage;
  const currentFilteredCharacters = filteredCharacters.slice(
    indexOfFirstFilteredCharacter,
    indexOfLastFilteredCharacter
  );

  const OnCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <>
      <div className="container mt-5 d-flex-column">
        <h1 className="text-primary mb-3 text-center">
          Hero or Villian: Make a Choice
        </h1>
        {selectedCharacter && (
          <Modal
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
        <CharacterSearch handleSearch={handleSearch} />
        <CharacterTable
          characters={currentFilteredCharacters}
          loading={loading}
          OnCharacterClick={OnCharacterClick}
        />
        <PageTurn
          charactersPerPage={charactersPerPage}
          totalCharacters={filteredCharacters.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default App;
