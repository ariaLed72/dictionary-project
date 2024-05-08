import React from "react";

export default function Phonetic(props) {
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
