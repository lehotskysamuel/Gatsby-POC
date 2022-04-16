/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";

export const Audio = ({ src, type = "audio/mp3" }) => {
  return (
    <audio controls={true} preload="auto">
      <source src={src} type={type} />
    </audio>
  );
};
