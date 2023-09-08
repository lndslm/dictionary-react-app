import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span className="text">{props.phonetic.text}</span>
      <ReactAudioPlayer src={props.phonetic.audio} controls className="audio" />
    </div>
  );
}
