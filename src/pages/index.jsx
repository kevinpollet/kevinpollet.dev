/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { graphql, Link } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import { rhythm, scale } from "../utils/typography";
import { SEO } from "../components/SEO";

export default ({ data, location }) => {
  const sushi = n => str => {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += str;
    }
    return result;
  };

  const posts = data.allMarkdownRemark.edges
    .map(elt => elt.node)
    .map(post => (
      <div style={{ paddingBottom: rhythm(1) }}>
        <Link to={post.frontmatter.path}>
          <h2 style={{ marginBottom: 0 }}>{post.frontmatter.title}</h2>
        </Link>

        <small style={{ ...scale(0), opacity: 0.8 }}>
          {post.frontmatter.date} ✦ {sushi(post.timeToRead)("🍣")}{" "}
          {post.timeToRead} min read
        </small>

        <p style={{ marginTop: rhythm(1 / 2) }}>
          {post.frontmatter.description}
        </p>
      </div>
    ));

  return (
    <Layout title={data.site.siteMetadata.title} location={location}>
      <SEO />
      <div style={{ display: "flex", flexDirection: "column" }}>{posts}</div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
