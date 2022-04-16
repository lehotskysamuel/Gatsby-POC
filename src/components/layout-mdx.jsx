import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { DemoComponent } from "./demo-component";
import { Audio } from "./audio";
import { Video } from "./video";
import { Image, ImageInline } from "./image";

const shortcodes = { DemoComponent, Video, Audio, Image, ImageInline };

const MdxLayout = ({ children }) => {
  return (
    <>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </>
  );
};

export default MdxLayout;
