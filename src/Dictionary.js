import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="Search-engine">
        <h5>What word are you looking for ?</h5>
        <form onSubmit={Search}>
          <input type="search" onChange={handleKeywordChange} />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}
