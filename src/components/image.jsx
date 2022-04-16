import React from "react";

import "./image.scss";

export const Image = ({ src, alt }) => {
  return <img className="image" src={src} alt={alt} />;
};

export const ImageInline = ({ src, alt }) => {
  return <img className="image-inline" src={src} alt={alt} />;
};
