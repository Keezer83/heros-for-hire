import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

export default function CharacterSearch({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex align-items-center">
      <InputGroup className="form-group">
        <FormControl
          type="text"
          className="form-control opacity-75"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleChange}
        />

        <Button type="submit" className="btn btn-primary ml-2 opacity-75">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}
