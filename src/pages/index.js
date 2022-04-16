import * as React from "react";
import { graphql, Link } from "gatsby";

const IndexPage = ({ data }) => (
  <>
    <h1>Pages:</h1>
    <ul>
      {data.allMdx.nodes.map((node) => {
        const title = node.frontmatter.title || node.slug;
        return (
          <li key={node.id}>
            <Link to={node.slug}>{title}</Link>
          </li>
        );
      })}
    </ul>
  </>
);

export const query = graphql`
  query {
    allMdx {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`;

export default IndexPage;
