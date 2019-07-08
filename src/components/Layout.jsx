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

export const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const resolvedTitle = title || data.site.siteMetadata.title;

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

      <header>
        <h1 style={{ ...scale(1.5) }}>{resolvedTitle}</h1>
      </header>

      <hr />

      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, kevinpollet</footer>
    </div>
  );
};
