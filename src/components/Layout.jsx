/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { rhythm, scale } from "../utils/typography";
import { Bio } from "./Bio.jsx";

export const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social {
            gravatar
          }
        }
      }
    }
  `);

  const resolvedTitle = title || data.site.siteMetadata.author;

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Helmet title={`${resolvedTitle} ✦ kevinpollet.dev`} />

      <header style={{ textAlign: "center" }}>
        <img
          style={{
            borderRadius: 100,
            border: "solid 1px blue",
            width: 120,
          }}
          alt={data.site.siteMetadata.author}
          src={`https://www.gravatar.com/avatar/${data.site.siteMetadata.social.gravatar}?s=300`}
        />
        <h1 style={{ ...scale(1.5), marginTop: 0 }}>{resolvedTitle}</h1>
        <Bio />
      </header>

      <hr />

      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, kevinpollet</footer>
    </div>
  );
};
