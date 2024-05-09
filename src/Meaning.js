import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h5>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              {definition.example && (
                <em className="Example">
                  <small>Ex. </small> {definition.example}
                </em>
              )}

              {definition.examples &&
                definition.examples.map(function (example, index) {
                  return <em key={index}>{example}</em>;
                })}
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </h5>
          </div>
        );
      })}
    </div>
  );
}
