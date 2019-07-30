/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { PostList } from "../components/PostList";
import { SEO } from "../components/SEO";

export default ({ data, location }) => {
  const { site, allMarkdownRemark } = data;
  const { title } = site.siteMetadata;
  const posts = allMarkdownRemark.edges.map(elt => elt.node);

  return (
    <Layout title={title} location={location}>
      <SEO />
      <PostList posts={posts} />
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
