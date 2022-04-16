import React from "react";

import "./video.scss";

export const Video = ({ src, type = "video/mp4" }) => {
  return (
    <video className="video" controls={true} preload="auto" playsInline={true}>
      <source src={src} type={type} />
    </video>
  );
};
