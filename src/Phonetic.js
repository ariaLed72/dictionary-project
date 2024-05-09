import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <br />
      <em>{props.phonetic.text}</em>
    </div>
  );
}
