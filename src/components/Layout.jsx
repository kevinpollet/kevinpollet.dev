/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Bio } from "./Bio";
import { rhythm, scale } from "../utils/typography";

export const Layout = ({ children, location, title }) => {
  const isHomePage = location.pathname === "/";
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: rhythm(30),
        padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
      }}
    >
      {isHomePage ? null : (
        <Link to="/">
          <h3>← Posts</h3>
        </Link>
      )}

      <header
        style={{
          marginTop: rhythm(1),
          borderBottom: "1px solid hsla(0,0%,0%,0.07)",
        }}
      >
        <h1 style={{ ...scale(2) }}>{title || site.siteMetadata.title}</h1>
        {isHomePage ? <Bio /> : null}
      </header>

      <main
        style={{
          paddingTop: rhythm(1.5),
          paddingBottom: rhythm(1.5),
        }}
      >
        {children}
      </main>
    </div>
  );
};
