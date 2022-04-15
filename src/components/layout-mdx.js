import React from "react";
import { MDXProvider } from "@mdx-js/react";
import DemoComponent from "./demo-component";
import Video from "./video";
import Image from "./image";

const shortcodes = { DemoComponent, Video, Image };

export default ({ children }) => {
  return (
    <>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </>
  );
};
