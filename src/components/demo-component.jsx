import React from "react";

export const DemoComponent = ({ name }) => {
  return <div>Hello {name ?? "demo"}</div>;
};
