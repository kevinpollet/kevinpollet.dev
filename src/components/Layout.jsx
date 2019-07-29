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
        padding: `${rhythm(1 / 2)}`,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid hsla(0,0%,0%,0.07)",
          paddingBottom: rhythm(1 / 2),
        }}
      >
        {isHomePage ? null : (
          <h3 style={{ marginBottom: 0, paddingBottom: rhythm(3 / 2) }}>
            <Link to="/">← Posts</Link>
          </h3>
        )}

        <h1
          style={{ ...scale(1.8), fontWeight: 800, margin: 0, borderBottom: 0 }}
        >
          {title || site.siteMetadata.title}
        </h1>

        {isHomePage ? <Bio /> : null}
      </header>

      <main style={{ padding: `${rhythm(1 / 2)} 0`, flex: 1 }}>{children}</main>

      <footer
        style={{
          borderTop: "1px solid hsla(0,0%,0%,0.07)",
          paddingTop: rhythm(1 / 2),
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
          }}
        >
          <li>Found a typo or a bug?</li>
          <li>
            Submit an{" "}
            <a href="https://github.com/kevinpollet/kevinpollet.dev/issues/new">
              issue
            </a>{" "}
            or open a{" "}
            <a href="https://github.com/kevinpollet/kevinpollet.dev/pulls">
              pull request
            </a>
            .
          </li>
          <li>
            <small>
              Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> and
              deployed on <a href="https://www.netlify.com/">Netlify</a>, ©{" "}
              {new Date().getFullYear()} kevinpollet
            </small>
          </li>
        </ul>
      </footer>
    </div>
  );
};
