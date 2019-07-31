/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import React from "react";
import { graphql, Link } from "gatsby";
import { Bio } from "../components/Bio";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { rhythm } from "../utils/typography";

export default ({ data, location, pageContext }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;
  const { title, date, description } = frontmatter;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={title}>
      <SEO title={title} description={description} />

      <small>
        {date} ✦ 🍱 {timeToRead} min read
      </small>

      <div
        style={{ padding: `${rhythm(1)} 0` }}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <Bio
        style={{
          padding: rhythm(1),
          margin: `${rhythm(1)} 0`,
          boxShadow: "0 1px 5px 0 rgba(210,214,220,0.5)",
        }}
      />

      {(next || previous) && (
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
              <Link to={previous.fields.slug}>
                ← {previous.frontmatter.title}
              </Link>
            </h3>
          )}
          {next && (
            <h3 style={{ marginBottom: 0, marginLeft: "auto" }}>
              <Link to={next.fields.slug}>{next.frontmatter.title} →</Link>
            </h3>
          )}
        </div>
      )}
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
