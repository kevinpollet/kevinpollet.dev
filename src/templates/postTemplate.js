/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { graphql, Link } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { rhythm } from "../utils/typography";

export default ({ data, location, pageContext }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout title={frontmatter.title} location={location}>
      <SEO title={frontmatter.title} description={frontmatter.description} />

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: rhythm(3),
        }}
      >
        {previous && (
          <Link style={{ marginRight: "auto" }} to={previous.frontmatter.path}>
            <h3>← {previous.frontmatter.title}</h3>
          </Link>
        )}
        {next && (
          <Link style={{ marginLeft: "auto" }} to={next.frontmatter.path}>
            <h3>{next.frontmatter.title} →</h3>
          </Link>
        )}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`;
