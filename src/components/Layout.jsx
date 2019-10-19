/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Link } from "gatsby";
import React from "react";
import { Bio } from "./Bio";
import { rhythm, scale } from "../utils/typography";

export const Layout = ({ children, location, title }) => {
  const isHomePage = location.pathname === "/";

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: rhythm(28),
        padding: `${isHomePage ? rhythm(2) : rhythm(1)} ${rhythm(1 / 2)} 0`,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          paddingBottom: rhythm(1 / 4),
          borderBottom: "1px solid hsla(0,0%,0%,0.07)",
        }}
      >
        {!isHomePage && (
          <h3 style={{ marginBottom: rhythm(1.2) }}>
            <Link to="/">← Back</Link>
          </h3>
        )}

        <h1
          style={{
            marginTop: 0,
            borderBottom: 0,
            fontWeight: 900,
            ...scale(1.7),
          }}
        >
          {title}
        </h1>

        {isHomePage && <Bio />}
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      <footer
        style={{
          borderTop: "1px solid hsla(0,0%,0%,0.07)",
          paddingTop: rhythm(1 / 2),
        }}
      >
        <ul style={{ listStyleType: "none", margin: 0 }}>
          <li>
            <p>Found a typo or a bug?</p>
            <p>
              Submit an{" "}
              <a href="https://github.com/kevinpollet/kevinpollet.dev/issues/new">
                issue
              </a>{" "}
              or open a{" "}
              <a href="https://github.com/kevinpollet/kevinpollet.dev/pulls">
                pull request
              </a>
              .
            </p>
          </li>
          <li>
            <small>© {new Date().getFullYear()} — kevinpollet</small>
          </li>
        </ul>
      </footer>
    </div>
  );
};
