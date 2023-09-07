import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning.synonyms);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition :</strong> {definition.definition}
                <br />
                {definition.example && <em>Example :{definition.example}</em>}
              </p>
            </div>
          );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />{" "}
      </p>
    </div>
  );
}