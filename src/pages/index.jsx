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
  const posts = data.allMarkdownRemark.edges
    .map(elt => elt.node)
    .map(post => (
      <div key={post.id} style={{ padding: `${rhythm(1 / 3)} 0` }}>
        <h2 style={{ margin: 0, ...scale(0.8), borderBottom: 0 }}>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h2>

        <small style={{ ...scale(-1 / 5) }}>
          {post.frontmatter.date} ✦ 🍱 {post.timeToRead} min read
        </small>

        <p>{post.frontmatter.description}</p>
      </div>
    ));

  return (
    <Layout location={location}>
      <SEO />
      {posts}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM DD, Y")
            description
          }
        }
      }
    }
  }
`;
