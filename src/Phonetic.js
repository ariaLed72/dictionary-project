import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <em>{props.phonetic.text}</em>
    </div>
  );
}
