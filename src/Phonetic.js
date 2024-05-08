import React from "react";

export default function Phonetic(props) {
  if (!props.phonetic) {
    return null;
  }

  return (
    <div className="Phonetic">
      <audio controls>
        <source src={props.phonetic.audio} type="audio/mpeg" />
        👉 Listen here 👈
      </audio>
      <br />
      {props.phonetic.text}
    </div>
  );
}
