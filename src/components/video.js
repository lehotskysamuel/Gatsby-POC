import React from "react";

const Video = ({ src, type = "video/mp4" }) => {
  return (
    <video controls={true} preload="auto" playsInline={true}>
      <source src={src} type={type} />
    </video>
  );
};

export default Video;
