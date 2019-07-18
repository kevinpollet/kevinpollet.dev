/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import React from "react";
import { rhythm } from "../utils/typography";

export const SocialLink = ({ children, to, imgSrc }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: `${rhythm(1 / 5)}`,
    }}
  >
    <img
      alt={children}
      style={{
        marginBottom: 0,
        marginRight: rhythm(1 / 3),
        width: rhythm(1),
        height: rhythm(1),
      }}
      src={imgSrc}
    />
    <a href={to}>{children}</a>
  </div>
);
