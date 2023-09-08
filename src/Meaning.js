import React from "react";
import Synonyms from "./Synonyms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <FontAwesomeIcon
                icon={faCaretRight}
                size="2xs"
                style={{ color: "#635250" }}
              />{" "}
              {definition.definition}
              <br />
              <span className="example">
                {definition.example && <em>"{definition.example}"</em>}
              </span>
            </p>
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
