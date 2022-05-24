/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";

import "./video.scss";

export const Video = ({ src, start, end, desc, type = "video/mp4" }) => {
  return (
    <video className="video" controls={true} preload="auto" playsInline={true}>
      <source
        // Start and End props are called Media Fragments, Temporal Dimension fragment specifically
        // See more on what content they might contain here: https://www.w3.org/TR/media-frags/#naming-time
        // The spec is still just a recommendation and doesn't work ideally (still allows me to play the rest of the file, whereas I would like to omit it)
        src={`${src}${start || end ? "#t=" : ""}${start || ""}${
          end ? `,${end}` : ""
        }`}
        type={type}
      />
    </video>
  );
};
