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
          paddingTop: rhythm(3 / 2),
        }}
      >
        {previous && (
          <h3 style={{ marginBottom: 0, marginRight: "auto" }}>
            <Link to={previous.frontmatter.path}>
              ← {previous.frontmatter.title}
            </Link>
          </h3>
        )}
        {next && (
          <h3 style={{ marginBottom: 0, marginLeft: "auto" }}>
            <Link to={next.frontmatter.path}>{next.frontmatter.title} →</Link>
          </h3>
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
