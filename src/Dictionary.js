import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="Search-engine">
        <h5>What word are you looking for ?</h5>
        <form onSubmit={Search}>
          <input type="search" onChange={handleKeywordChange} />
          <input type="submit" value="Search" className="ms-2" />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
