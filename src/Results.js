import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results && props.results.meanings) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <span>
            {props.results.phonetic.text} {props.results.phonetic.audio}
          </span>
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