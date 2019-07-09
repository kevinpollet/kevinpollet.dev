/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { graphql, Link } from "gatsby";
import React from "react";
import { Bio } from "../components/Bio";
import { Layout } from "../components/Layout";
import { rhythm, scale } from "../utils/typography";

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(elt => elt.node);

  return (
    <Layout title={data.site.siteMetadata.author}>
      <Bio />
      <hr />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {posts.map(post => (
          <div style={{ padding: `${rhythm(0.3)} 0` }}>
            <Link style={{ textDecoration: "none" }} to={post.frontmatter.path}>
              <h2 style={{ ...scale(0.8), marginBottom: rhythm(1 / 8) }}>
                {post.frontmatter.title}
              </h2>
            </Link>
            <small>
              {post.frontmatter.date} ✦ {post.timeToRead} min read
            </small>
            <p style={{ marginTop: rhythm(1 / 2) }}>
              {post.frontmatter.description}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date(formatString: "MMM DD, Y")
            description
            path
          }
        }
      }
    }
  }
`;
