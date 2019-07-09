/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import React from "react";
import { Helmet } from "react-helmet";
import { rhythm, scale } from "../utils/typography";

export const Layout = ({ children, title }) => {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Helmet title={`${title} ✦ kevinpollet.dev`} />

      <header>
        <h1 style={{ ...scale(1.5), marginTop: 0 }}>{title}</h1>
      </header>

      <main>{children}</main>

      <footer style={{ marginTop: rhythm(1) }}>
        © {new Date().getFullYear()}, kevinpollet
      </footer>
    </div>
  );
};
