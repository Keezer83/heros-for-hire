import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PageTurn from "./components/PageTurn/PageTurn";
import "bootstrap/dist/css/bootstrap.min.css";
import CharacterTable from "./components/CharacterTable/CharacterTable";

function App() {
  // const { imageURL } = this.state;
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(10);

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

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-primary mb-3">Title Pending</h1>
        <CharacterTable characters={currentCharacters} loading={loading} />
        {/* <Characters characters={currentCharacters} loading={loading} /> */}
        <PageTurn
          charactersPerPage={charactersPerPage}
          totalCharacters={characters.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default App;
