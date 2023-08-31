import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
      <div className="Search-engine">
        <h5 className="pb-3">What word are you looking for ?</h5>
        <form onSubmit={Search}>
          <input type="search" onChange={handleKeywordChange} />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}
