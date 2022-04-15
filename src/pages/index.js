import * as React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <>
      All Files:
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
      <br />
      All MDX:
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id}>
            {node.id} - {node.frontmatter.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
    allMdx {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`;

export default IndexPage;
