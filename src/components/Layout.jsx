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
        margin: "0 auto",
        maxWidth: rhythm(30),
        padding: `${rhythm(1 / 2)} ${rhythm(1 / 2)}`,
      }}
    >
      <header
        style={{
          borderBottom: "1px solid hsla(0,0%,0%,0.07)",
          padding: `${rhythm(1 / 2)} 0`,
        }}
      >
        {isHomePage ? null : (
          <h3 style={{ marginBottom: 0, paddingBottom: rhythm(3 / 2) }}>
            <Link to="/">← Posts</Link>
          </h3>
        )}

        <h1 style={{ ...scale(2) }}>{title || site.siteMetadata.title}</h1>

        {isHomePage ? <Bio /> : null}
      </header>

      <main style={{ padding: `${rhythm(3 / 2)} 0` }}>{children}</main>

      <footer>
        <ul
          style={{
            borderTop: "1px solid hsla(0,0%,0%,0.07)",
            listStyleType: "none",
            margin: 0,
            padding: `${rhythm(1 / 2)} 0`,
          }}
        >
          <li>
            Built with <Link to="https://www.gatsbyjs.org/">Gatsby</Link> and
            deployed on <Link to="https://www.netlify.com/">Netlify</Link>
          </li>
          <li>© {new Date().getFullYear()}, kevinpollet</li>
        </ul>
      </footer>
    </div>
  );
};
