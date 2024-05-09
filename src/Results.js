import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <div className="word-container">
            <h2>{props.results.word}</h2>{" "}
          </div>
          <div className="phonetics-container">
            {" "}
            {props.results.phonetics.map(function (phonetic, index) {
              return <Phonetic key={index} phonetic={phonetic} />;
            })}
          </div>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
