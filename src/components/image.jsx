import React from "react";

import "./image.scss";

export const Image = ({ src, desc }) => {
  return <img className="image" src={src} alt={desc} />;
};

export const ImageInline = ({ src, desc }) => {
  return <img className="image-inline" src={src} alt={desc} />;
};
