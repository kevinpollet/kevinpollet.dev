/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import React from "react";
import { rhythm, scale } from "../utils/typography";

export const Layout = ({ children, siteTitle }) => {
  const header = (
    <h1
      style={{
        ...scale(1.5),
      }}
    >
      {siteTitle}
    </h1>
  );

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <hr />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, kevinpollet</footer>
    </div>
  );
};
